
const UI = {
    container: document.getElementById('app-container'),
    backBtn: document.getElementById('back-btn'),
    appTitle: document.getElementById('app-title'),
    translateBtn: document.getElementById('floating-translate-btn'),
    currentLecture: null,
    isRTL: false,
    activeSection: null,

    init() {
        this.isRTL = false;
        document.body.classList.remove('rtl-mode');
    },

    hideAllOverlays() {
        document.getElementById('win-overlay').style.display = 'none';
    },

    toggleTranslation() {
        this.isRTL = !this.isRTL;
        if (this.isRTL) {
            document.body.classList.add('rtl-mode');
            this.translateBtn.innerText = "English ← Arabic";
        } else {
            document.body.classList.remove('rtl-mode');
            this.translateBtn.innerText = "English → Arabic";
        }

        if (this.activeSection && this.activeSection !== 'quiz') {
            this.openSection(this.activeSection);
        } else if (this.activeSection === 'quiz') {
            if (typeof QuizController !== 'undefined' && QuizController.currentRoundQuestions.length > 0) {
                QuizController.loadQuestion();
            } else {
                this.openSection('quiz');
            }
        }
    },

    renderHome() {
        this.init();
        this.backBtn.classList.add('hidden');
        this.translateBtn.classList.add('hidden');
        this.backBtn.onclick = null;
        this.appTitle.innerText = "B2 Course Sessions";
        
        let html = `<div class="screen"><div class="lecture-grid">`;
        
        DataStore.lectures.forEach(lecture => {
            const lockedClass = lecture.isPlaceholder ? "locked" : "";
            // عند الضغط على الزر، نفتح المحاضرة في الخلفية ثم نفتح القسم المطلوب مباشرة
            const clickRev = lecture.isPlaceholder ? `onclick="alert('This session will be unlocked soon!')"` : `onclick="event.stopPropagation(); App.openLecture(${lecture.id}); UI.openSection('revision');"`;
            const clickQuiz = lecture.isPlaceholder ? `onclick="alert('This session will be unlocked soon!')"` : `onclick="event.stopPropagation(); App.openLecture(${lecture.id}); UI.openSection('quiz');"`;

            html += `
                <div class="lecture-card ${lockedClass}">
                    <div class="lecture-title" style="margin-bottom: 5px;">Session ${lecture.id}: ${lecture.title}</div>
                    <div style="display: flex; gap: 10px; width: 100%; margin-top: 10px;">
                        <button style="flex: 1; padding: 12px; background: var(--btn-blue); color: white; border: none; border-radius: 12px; font-weight: 800; font-size: 16px; cursor: pointer; box-shadow: 0 4px 0 var(--btn-blue-dark);" ${clickRev}>Revision</button>
                        <button style="flex: 1; padding: 12px; background: var(--btn-green); color: white; border: none; border-radius: 12px; font-weight: 800; font-size: 16px; cursor: pointer; box-shadow: 0 4px 0 var(--btn-green-dark);" ${clickQuiz}>Quiz</button>
                    </div>
                </div>
            `;
        });
        html += `</div></div>`;
        this.container.innerHTML = html;
    },

    renderLecture(lecture) {
        this.currentLecture = lecture;
        this.backBtn.classList.remove('hidden');
        this.translateBtn.classList.add('hidden'); 
        this.appTitle.innerText = `Session ${lecture.id}`;
        this.backBtn.onclick = () => this.renderHome();

        // قسمين فقط (المراجعة والكويز)
        let gridHtml = `<div class="screen" id="lecture-menu"><div class="section-grid">`;
        if (lecture.revision) gridHtml += this.createSectionCard('revision', 'Revision', 'المراجعة الشاملة للشرح والكلمات');
        if (lecture.quiz && lecture.quiz.length > 0) gridHtml += this.createSectionCard('quiz', 'Practice Quiz', 'اختبر فهمك للأسئلة');
        gridHtml += `</div></div><div id="section-content"></div>`;

        this.container.innerHTML = gridHtml;
    },

    createSectionCard(id, title, desc) {
        return `
            <div class="section-card" onclick="UI.openSection('${id}')">
                <div class="section-title" style="font-family: 'Cairo', sans-serif;">${title}</div>
                <div class="section-desc" style="font-family: 'Cairo', sans-serif;">${desc}</div>
            </div>
        `;
    },

    openSection(sectionId) {
        this.activeSection = sectionId;
        document.getElementById('lecture-menu').style.display = 'none';
        const contentDiv = document.getElementById('section-content');
        contentDiv.style.display = 'block';

        if (sectionId !== 'quiz') {
            this.translateBtn.classList.remove('hidden');
        } else {
            this.translateBtn.classList.add('hidden');
        }

        this.backBtn.onclick = () => {
            this.init();
            contentDiv.style.display = 'none';
            document.getElementById('lecture-menu').style.display = 'block';
            this.translateBtn.classList.add('hidden');
            this.backBtn.onclick = () => this.renderHome(); 
        };

        const lec = this.currentLecture;
        let contentHtml = ``;

        const renderContentBlocks = (dataKey) => {
            let data = (this.isRTL && lec[`${dataKey}Ar`] && lec[`${dataKey}Ar`].length > 0) ? lec[`${dataKey}Ar`] : lec[dataKey];
            let html = '';
            
            if (Array.isArray(data)) {
                data.forEach(block => {
                    let txt = block.content ? block.content.replace(/\n/g, '<br>') : '';
                    
                    if (block.type === 'note') {
                        html += `<div class="orange-note-box"><div class="orange-note-title">💡 Note</div><p>${txt}</p></div>`;
                    } else if (block.type === 'rule') {
                        html += `<div class="law-box"><div class="law-title">✏️ ${block.title || ''}</div><p>${txt}</p></div>`;
                    } else if (block.type === 'example') {
                        html += `<div class="example-box"><div class="example-title">🗣️ Examples</div><p>${txt}</p></div>`;
                    } else if (block.type === 'mistake') {
                        html += `<div class="warning-box"><div class="warning-title">⚠️ Common Mistake</div><p>${txt}</p></div>`;
                    } else if (block.type === 'table') {
                        let headersHtml = block.headers.map(h => `<th>${h}</th>`).join('');
                        let rowsHtml = block.rows.map(r => `<tr>${r.map(d => `<td>${d.replace(/\n/g, '<br>')}</td>`).join('')}</tr>`).join('');
                        html += `<div class="summary-table-wrapper"><table class="summary-table"><thead><tr>${headersHtml}</tr></thead><tbody>${rowsHtml}</tbody></table></div>`;
                    } else if (block.type === 'title') {
                        html += `<h3 style="color:var(--secondary-blue-dark); margin: 20px 0 10px;">${txt}</h3>`;
                    } else if (block.type === 'text') {
                        html += `<p style="margin-bottom:10px; font-size:16px; line-height:1.6;">${txt}</p>`;
                    }
                });
                return `<div class="screen summary-wrapper english-content">${html}</div>`;
            }
            return `<div class="screen summary-wrapper english-content">${data}</div>`;
        };

if (sectionId === 'revision') {
            contentHtml = renderContentBlocks('revision');
        } 
        else if (sectionId === 'quiz') {
            contentHtml = `
                <div class="screen" style="text-align:center; padding-top: 80px;">
                    <h2 style="margin-bottom: 30px; font-family: 'Cairo', sans-serif;">Ready to test your English?</h2>
                    <p style="margin-bottom: 30px; color:#666;">This quiz covers everything in the session.</p>
                    <button class="btn-main" style="width: 80%; box-shadow: 0 6px 0 var(--btn-green-dark);" onclick="QuizController.startQuiz(${lec.id})">Start Quiz</button>
                </div>
            `;
            this.backBtn.classList.add('hidden');
        }
        
        contentDiv.innerHTML = contentHtml;
    },

    renderQuizQuestion(qData, currentIndex, totalNum, roundNum) {
        this.activeSection = 'quiz'; 
        const contentDiv = document.getElementById('section-content');
        const progressPercent = ((currentIndex + 1) / totalNum) * 100;
        const isAnswered = qData.userAnswerIndex !== null;

        this.translateBtn.classList.remove('hidden');

        let qText = (this.isRTL && qData.questionAr) ? qData.questionAr : qData.question;
        let qOptions = (this.isRTL && qData.optionsAr && qData.optionsAr.length > 0) ? qData.optionsAr : qData.options;
        let qHint = (this.isRTL && qData.hintAr) ? qData.hintAr : qData.hint;

        // إزالة التنسيقات الثابتة للسماح بوضع الترجمة (RTL) بالعمل بشكل سليم
        let html = `
            <div class="quiz-wrapper">
                <div class="quiz-header">
                    <span class="close-btn" onclick="UI.exitQuiz()">✕</span>
                    <div class="quiz-progress-bar-bg">
                        <div class="quiz-progress-bar-fill" style="width: ${progressPercent}%;"></div>
                    </div>
                    <div style="font-weight: 800; font-size: 16px; direction: ltr;">${currentIndex + 1}/${totalNum}</div>
                </div>
                <div id="round-info">Quiz Mode</div>
                <div class="quiz-question-box english-content">${qText.replace(/\n/g, '<br>')}</div>
                <div class="options-container english-content">
        `;

        qData.shuffledIndices.forEach(originalIdx => {
            let stateClass = "active-click";
            let clickAction = `onclick="QuizController.selectOption(this, ${originalIdx})"`;

            if (isAnswered) {
                clickAction = ""; 
                stateClass = "locked"; 
                if (originalIdx === qData.correct) stateClass += " correct";
                else if (originalIdx === qData.userAnswerIndex && qData.userAnswerIndex !== qData.correct) stateClass += " wrong";
            }
            html += `<div class="option-btn ${stateClass}" ${clickAction}>${qOptions[originalIdx].replace(/\n/g, '<br>')}</div>`;
        });
        html += `</div>`;
        
        if (isAnswered && qHint) {
            html += `
                <div class="orange-note-box">
                    <div class="orange-note-title">💡 ${this.isRTL ? "التفسير:" : "Explanation:"}</div>
                    <ul class="explanation-list english-content"><li>${qHint.replace(/\n/g, '<br>')}</li></ul>
                </div>
            `;
        }

        const backDisabled = currentIndex === 0 ? "disabled" : "";
        const nextDisabled = !isAnswered ? "disabled" : "";
        const nextText = (currentIndex === totalNum - 1 && isAnswered) ? (this.isRTL ? "إنهاء" : "FINISH") : (this.isRTL ? "التالي" : "NEXT");

        html += `
                <div class="quiz-footer">
                    <button class="nav-btn next" ${nextDisabled} onclick="QuizController.nextQuestion()">${nextText}</button>
                    <button class="nav-btn prev" ${backDisabled} onclick="QuizController.prevQuestion()">${this.isRTL ? "الرجوع" : "BACK"}</button>
                </div>
            </div>
        `;
        contentDiv.innerHTML = html;
    },

    exitQuiz() {
        this.init();
        if (typeof QuizController !== 'undefined') QuizController.currentRoundQuestions = [];
        document.getElementById('section-content').style.display = 'none';
        document.getElementById('lecture-menu').style.display = 'block';
        this.translateBtn.classList.add('hidden');
        this.backBtn.classList.remove('hidden');
        this.backBtn.onclick = () => this.renderHome(); 
    },

    showWinOverlay() {
        this.translateBtn.classList.add('hidden');
        document.getElementById('win-overlay').style.display = 'flex';
        confetti({ particleCount: 300, spread: 100, origin: { y: 0.6 }, colors: ['#12D11E', '#2196F3', '#FFC107'] });
    }
};
