DataStore.lectures.push({
    id: 1,
    title: "Introductory Session (Present, Past & Phonics)",
    isPlaceholder: false,

    // =========================================================================
    // 1. REVISION SECTION (ENGLISH) - شامل القواعد والكلمات والقراءة
    // =========================================================================
    revision: [
        // --- Grammar ---
        { type: 'title', content: 'Part 1: Present Simple vs. Past Simple' },
        { type: 'text', content: 'The foundation of English relies on understanding when an action happens. Let us compare the Present Simple (habits and facts) with the Past Simple (finished actions).' },
        { 
            type: 'table', 
            headers: ['Feature', 'Present Simple', 'Past Simple'], 
            rows: [
                ['Affirmative', 'I play / He plays (add -s for 3rd person singular)', 'I played / He played (add -ed or irregular form)'],
                ['Negative', 'I do not play / He does not play', 'I did not play / He did not play'],
                ['Question', 'Do I play? / Does he play?', 'Did I play? / Did he play?']
            ] 
        },
        { type: 'rule', title: 'Present Simple Usages', content: 'We use it for:<br>1. <b>Universal Truths & Facts:</b> Water boils at 100 degrees Celsius. The Earth revolves around the Sun.<br>2. <b>Permanent Situations & Habits:</b> She works as a doctor. I drink coffee every morning.<br>3. <b>Timetabled Future Events:</b> The train leaves at 7 PM tonight. The English course starts next Monday.<br>4. <b>Narratives & Commentaries:</b> In the film, a boy finds a creature. He passes the ball and scores!' },
        { type: 'note', content: '<b>Signal Words for Present Simple:</b> Always, usually, never, often, sometimes, every morning/day, on Mondays.' },
        { type: 'rule', title: 'Past Simple Usages', content: 'We use it for:<br>1. <b>A Completed Fact:</b> Describing actions, events, or situations that are completely finished and viewed as a single "dot" on a timeline.<br>2. <b>Specific Time & Historical Facts:</b> The Romans conquered Britain. I went to Italy in 2006.<br>3. <b>Sequences and Habits in the past:</b> As soon as the plane landed, Ted checked his emails. The tribe elected a new chief every year.' },
        { type: 'note', content: '<b>Signal Words for Past Simple:</b> Yesterday, last week, in 2006, two days ago, when I was younger, first, then, after that.' },
        { type: 'mistake', content: 'Never add "s" or "ed" to the main verb after <b>Do, Does, or Did</b>! <br>Wrong: <i>Did he went?</i><br>Right: <i>Did he go?</i>' },
        
        // --- Phonics ---
        { type: 'title', content: 'Part 2: English Phonics (Sounds vs. Letters)' },
        { type: 'text', content: 'There is a big difference between letters (how we write) and sounds (how we speak). There are 26 letters in the alphabet, but <b>44 English sounds</b>! For example, "w" is pronounced "double-you" as a letter, but makes a "woo" sound in a word. Sounds are divided into Consonants and Vowels.' },
        { type: 'rule', title: 'Consonants (Voiced vs. Voiceless)', content: 'Touch your throat with your hand when speaking:<br>• <b>Voiceless:</b> Your throat DOES NOT vibrate.<br>• <b>Voiced:</b> Your throat VIBRATES.' },
        { type: 'rule', title: 'Vowels (A, E, I, O, U)', content: 'Vowels represent speech sounds where air leaves the mouth without any blockage by the tongue, lips, or throat, causing the <b>chin to drop noticeably</b>, whilst consonant sounds restrict airflow.' },
        { type: 'note', content: 'All words in the English language MUST have at least one vowel sound in them!' },
        { 
            type: 'table', 
            headers: ['Letter', 'Short Vowel', 'Long Vowel'], 
            rows: [
                ['Aa', 'mat / pan / ant', 'mate / cake / page'],
                ['Ee', 'pet / met / nest / egg', 'Pete / me / pea / tree / easy'],
                ['Ii', 'fill / tip / igloo / kid', 'file / fine / island'],
                ['Oo', 'hop / lock / hot / octopus', 'hope / oak / nose'],
                ['Uu', 'us / fun / gum / umbrella', 'use / huge / June'],
                ['Yy', 'N/A', 'happy']
            ] 
        },
        { type: 'note', content: '<b>Short Vowels:</b> Short duration, cannot be held onto without becoming distorted.<br><b>Long Vowels:</b> The sound matches its spoken letter name in the alphabet, and can be held without distortion.' },

        // --- Vocabulary ---
        { type: 'title', content: 'Part 3: Important Vocabulary' },
        { type: 'text', content: 'These are the most important terms you need to remember from this session:' },
        {
            type: 'table',
            headers: ['Word', 'Meaning', 'Example'],
            rows: [
                ['Permanent', 'Lasting or intended to last unchanged indefinitely.', 'She is looking for permanent employment.'],
                ['Habitual', 'Done constantly or as a habit.', 'His habitual coffee drinking kept him awake.'],
                ['Universal Truth', 'A fact that is always true everywhere.', 'The Earth revolves around the Sun is a universal truth.'],
                ['Voiceless', 'A sound produced without vocal cord vibration.', "The 's' sound in 'snake' is voiceless."],
                ['Voiced', 'A sound produced with vocal cord vibration.', "The 'z' sound in 'zoo' is voiced."],
                ['Vowel', 'A speech sound made with freely flowing air and mouth open.', 'A, E, I, O, U are vowels.'],
                ['Distorted', 'Pulled or twisted out of shape (sound ruined).', 'If you stretch a short vowel, the sound gets distorted.']
            ]
        },

        // --- Reading Context ---
        { type: 'title', content: 'Part 4: Reading Context (A Tale of Two Timelines)' },
        { type: 'text', content: 'Mark <b>is</b> a pilot. He <b>flies</b> airplanes for a living. Every morning, he <b>wakes</b> up at 5:00 AM, <b>drinks</b> a cup of black coffee, and <b>drives</b> to the airport. This <b>is</b> his <i>permanent</i> routine. He <b>enjoys</b> his job because the sky always <b>looks</b> peaceful. <i>(Present Simple for habits and facts).</i>' },
        { type: 'text', content: 'However, last week <b>was</b> entirely different. Mark <b>did not go</b> to work. Instead, he <b>flew</b> to Italy for a vacation. He <b>visited</b> historical museums and <b>ate</b> delicious pasta. As soon as his plane <b>landed</b> back home yesterday, he <b>checked</b> his emails and <b>realized</b> how much he <b>missed</b> his daily routine. <i>(Past Simple for finished actions and sequences).</i>' }
    ],

    // =========================================================================
    // 2. REVISION SECTION (ARABIC TRANSLATION)
    // =========================================================================
    revisionAr: [
        // --- Grammar ---
        { type: 'title', content: 'الجزء الأول: المضارع البسيط مقابل الماضي البسيط' },
        { type: 'text', content: 'أساس اللغة الإنجليزية يعتمد على فهم متى يحدث الفعل. دعونا نقارن بين المضارع البسيط (للعادات والحقائق) والماضي البسيط (للأحداث المنتهية).' },
        { 
            type: 'table', 
            headers: ['الخاصية', 'المضارع البسيط (Present Simple)', 'الماضي البسيط (Past Simple)'], 
            rows: [
                ['الإثبات', 'I play / He plays (نضيف s للمفرد الغائب)', 'I played / He played (نضيف ed أو فعل شاذ)'],
                ['النفي', 'I do not play / He does not play', 'I did not play / He did not play'],
                ['السؤال', 'Do I play? / Does he play?', 'Did I play? / Did he play?']
            ] 
        },
        { type: 'rule', title: 'استخدامات المضارع البسيط', content: 'نستخدمه للتعبير عن:<br>1. <b>الحقائق الثابتة والعالمية:</b> الماء يغلي عند 100 درجة مئوية. الأرض تدور حول الشمس.<br>2. <b>العادات والمواقف الدائمة:</b> هي تعمل كطبيبة. أنا أشرب القهوة كل صباح.<br>3. <b>جداول المواعيد المستقبلية (قطارات، مواعيد دراسة):</b> يغادر القطار الساعة 7 مساءً. تبدأ دورة اللغة الإنجليزية الإثنين القادم.<br>4. <b>السرد والتعليق الرياضي:</b> في الفيلم يجد الفتى مخلوقاً. يمرر الكرة ويسجل هدفاً!' },
        { type: 'note', content: '<b>الكلمات الدالة (Signal Words):</b> Always (دائماً), usually (عادة), never (أبداً), often (غالباً), sometimes (أحياناً), every (كل).' },
        { type: 'rule', title: 'استخدامات الماضي البسيط', content: 'نستخدمه للتعبير عن:<br>1. <b>حدث منتهي تماماً:</b> فعل بدأ وانتهى في الماضي ويُنظر إليه كنقطة منتهية على الخط الزمني.<br>2. <b>وقت محدد وحقائق تاريخية:</b> الرومان غزوا بريطانيا. ذهبت إلى إيطاليا عام 2006.<br>3. <b>تسلسل أحداث وعادات ماضية:</b> بمجرد هبوط الطائرة، فحص تيد رسائله. كانت القبيلة تنتخب زعيماً كل عام.' },
        { type: 'note', content: '<b>الكلمات الدالة:</b> Yesterday (أمس), last week (الأسبوع الماضي), in 2006, ago (منذ), first, then, after that.' },
        { type: 'mistake', content: 'إياك أن تضيف "s" أو "ed" للفعل الأساسي بعد <b>Do, Does, Did</b>! الفعل يجب أن يكون في المصدر.<br>خطأ: <i>Did he went?</i><br>صح: <i>Did he go?</i>' },
        
        // --- Phonics ---
        { type: 'title', content: 'الجزء الثاني: الصوتيات (الحروف مقابل الأصوات)' },
        { type: 'text', content: 'هناك فرق كبير بين الحروف المكتوبة والأصوات المنطوقة. يوجد 26 حرفاً في الإنجليزية، لكنها تنتج <b>44 صوتاً</b>! على سبيل المثال حرف w يُنطق "دبل يو" كاسم حرف لكن صوته في الكلمات "وو". تنقسم الأصوات إلى ساكنة (Consonants) ومتحركة (Vowels).' },
        { type: 'rule', title: 'الأصوات الساكنة (مهموسة ومجهورة)', content: 'ضع يدك على حنجرتك أثناء النطق:<br>• <b>Voiceless (مهموس):</b> حنجرتك لا تهتز.<br>• <b>Voiced (مجهور):</b> حنجرتك تهتز.' },
        { type: 'rule', title: 'الأصوات المتحركة (A, E, I, O, U)', content: 'هي أصوات يتدفق فيها الهواء بحرية دون أي إعاقة من اللسان أو الشفاه مما يجعل <b>الفك السفلي/الذقن ينخفض بوضوح</b>، بينما الأصوات الساكنة تحبس أو تقيد مجرى الهواء.' },
        { type: 'note', content: 'كل الكلمات في اللغة الإنجليزية يجب أن تحتوي على صوت متحرك واحد على الأقل!' },
        { 
            type: 'table', 
            headers: ['الحرف', 'صوت قصير (Short Vowel)', 'صوت طويل (Long Vowel)'], 
            rows: [
                ['Aa', 'mat / pan / ant', 'mate / cake / page'],
                ['Ee', 'pet / met / nest / egg', 'Pete / me / pea / tree / easy'],
                ['Ii', 'fill / tip / igloo / kid', 'file / fine / island'],
                ['Oo', 'hop / lock / hot / octopus', 'hope / oak / nose'],
                ['Uu', 'us / fun / gum / umbrella', 'use / huge / June'],
                ['Yy', 'لا يوجد (N/A)', 'happy']
            ] 
        },
        { type: 'note', content: '<b>الأصوات القصيرة:</b> مدتها سريعة وقصيرة، ولا يمكن مدها وإلا يتشوه الصوت.<br><b>الأصوات الطويلة:</b> صوت الحرف يطابق اسمه في الأبجدية، ويمكن مده دون تشويه.' },

        // --- Vocabulary ---
        { type: 'title', content: 'الجزء الثالث: أهم الكلمات والمصطلحات' },
        { type: 'text', content: 'هذه هي أهم المصطلحات التي يجب عليك تذكرها من هذه المحاضرة:' },
        {
            type: 'table',
            headers: ['الكلمة', 'المعنى', 'مثال (Example)'],
            rows: [
                ['Permanent', 'دائم / مستمر', 'She is looking for permanent employment.'],
                ['Habitual', 'اعتيادي / متكرر كعادة', 'His habitual coffee drinking kept him awake.'],
                ['Universal Truth', 'حقيقة كونية ثابتة', 'The Earth revolves around the Sun is a universal truth.'],
                ['Voiceless', 'مهموس (لا تهتز معه الأحبال الصوتية)', "The 's' sound in 'snake' is voiceless."],
                ['Voiced', 'مجهور (تهتز معه الأحبال الصوتية)', "The 'z' sound in 'zoo' is voiced."],
                ['Vowel', 'صوت متحرك (يتدفق الهواء بحرية)', 'A, E, I, O, U are vowels.'],
                ['Distorted', 'مُشوّه / محرف', 'If you stretch a short vowel, the sound gets distorted.']
            ]
        },

        // --- Reading Context ---
        { type: 'title', content: 'الجزء الرابع: قراءة تطبيقية (قصة خطين زمنيين)' },
        { type: 'text', content: 'مارك طيار. هو يطير بالطائرات لكسب عيشه. كل صباح، يستيقظ في الساعة 5 فجراً، يشرب فنجاناً من القهوة السوداء، ويقود سيارته إلى المطار. هذا هو روتينه الدائم. هو يستمتع بوظيفته لأن السماء تبدو دائماً هادئة. <i>(تم استخدام المضارع البسيط هنا للتعبير عن العادات والحقائق).</i>' },
        { type: 'text', content: 'ومع ذلك، الأسبوع الماضي كان مختلفاً تماماً. مارك لم يذهب إلى العمل. بدلاً من ذلك، سافر إلى إيطاليا لقضاء إجازة. زار المتاحف التاريخية وأكل مكرونة لذيذة. وبمجرد أن هبطت طائرته عائداً إلى وطنه أمس، فحص رسائل البريد الإلكتروني وأدرك كم افتقد روتينه اليومي. <i>(تم استخدام الماضي البسيط هنا لأحداث منتهية متسلسلة في الماضي).</i>' }
    ],

    // =========================================================================
    // 3. QUIZ SECTION (35 Questions - Complete Coverage)
    // =========================================================================
    quiz: [
        // --- Slide 5 Exercise (1 to 10) ---
        {
            question: "1. They _______ to Italy last summer.",
            questionAr: "١. هم _______ إلى إيطاليا الصيف الماضي.",
            options: ["go", "went", "goes", "gone"],
            optionsAr: ["go", "went", "goes", "gone"],
            correct: 1,
            hint: "The keyword is 'last summer', which indicates a finished past action.",
            hintAr: "الكلمة الدالة هي 'last summer' مما يعني أن الحدث انتهى في الماضي (Past Simple)."
        },
        {
            question: "2. I always _______ ketchup with my spaghetti.",
            questionAr: "٢. أنا دائماً _______ الكاتشب مع المكرونة.",
            options: ["had", "has", "have", "having"],
            optionsAr: ["had", "has", "have", "having"],
            correct: 2,
            hint: "The word 'always' shows a habit (Present Simple). 'I' takes 'have'.",
            hintAr: "كلمة 'always' تدل على عادة (مضارع بسيط). الضمير I يأخذ have."
        },
        {
            question: "3. She _______ her uncle yesterday.",
            questionAr: "٣. هي _______ عمها أمس.",
            options: ["visits", "visit", "visiting", "visited"],
            optionsAr: ["visits", "visit", "visiting", "visited"],
            correct: 3,
            hint: "'Yesterday' indicates a past action (regular verb + -ed).",
            hintAr: "كلمة 'yesterday' تتطلب ماضي بسيط (نضيف ed للفعل المنتظم)."
        },
        {
            question: "4. Ben often _______ to Tim.",
            questionAr: "٤. بن غالباً _______ إلى تيم.",
            options: ["talk", "talks", "talked", "talking"],
            optionsAr: ["talk", "talks", "talked", "talking"],
            correct: 1,
            hint: "'Often' shows a habit. Ben is 3rd person singular (he), so add 's'.",
            hintAr: "'Often' تعبر عن عادة. وبما أن Ben مفرد غائب، نضيف s للفعل."
        },
        {
            question: "5. They _______ in front of the computer every evening.",
            questionAr: "٥. هم _______ أمام الكمبيوتر كل مساء.",
            options: ["sit", "sits", "sat", "sitting"],
            optionsAr: ["sit", "sits", "sat", "sitting"],
            correct: 0,
            hint: "'Every evening' is a habit. 'They' takes the base verb.",
            hintAr: "'Every evening' تعبر عن عادة. الضمير They يأخذ الفعل في المصدر."
        },
        {
            question: "6. She _______ tea at 5 o'clock on Saturdays.",
            questionAr: "٦. هي _______ الشاي الساعة 5 أيام السبت.",
            options: ["have", "has", "had", "haves"],
            optionsAr: ["have", "has", "had", "haves"],
            correct: 1,
            hint: "'On Saturdays' implies a repeated habit. 'She' takes 'has'.",
            hintAr: "أيام السبت تعني عادة متكررة. الضمير She يأخذ has."
        },
        {
            question: "7. They _______ their holidays two weeks ago.",
            questionAr: "٧. هم _______ إجازتهم منذ أسبوعين.",
            options: ["like", "likes", "liked", "liking"],
            optionsAr: ["like", "likes", "liked", "liking"],
            correct: 2,
            hint: "'Ago' means the action is completely finished (Past Simple).",
            hintAr: "كلمة 'ago' تعني أن الحدث انتهى (ماضي بسيط)."
        },
        {
            question: "8. Toby never _______ his room.",
            questionAr: "٨. توبي لا _______ غرفته أبداً.",
            options: ["clean", "cleans", "cleaned", "cleaning"],
            optionsAr: ["clean", "cleans", "cleaned", "cleaning"],
            correct: 1,
            hint: "'Never' is an adverb of frequency. Toby is singular -> cleans.",
            hintAr: "Never تدل على المضارع البسيط. توبي مفرد لذا نضع s للفعل."
        },
        {
            question: "9. Sidney _______ a famous YouTuber in 2020.",
            questionAr: "٩. سيدني _______ يوتيوبر مشهور في 2020.",
            options: ["meet", "meets", "met", "meeting"],
            optionsAr: ["meet", "meets", "met", "meeting"],
            correct: 2,
            hint: "'In 2020' is a specific time in the past. The past of meet is met.",
            hintAr: "'في 2020' هو وقت محدد في الماضي. ماضي الفعل الشاذ meet هو met."
        },
        {
            question: "10. I sometimes _______ to the office.",
            questionAr: "١٠. أنا أحياناً _______ إلى المكتب.",
            options: ["walk", "walks", "walked", "walking"],
            optionsAr: ["walk", "walks", "walked", "walking"],
            correct: 0,
            hint: "'Sometimes' shows a habit. 'I' takes the base verb.",
            hintAr: "'Sometimes' تدل على عادة. الضمير I يأخذ الفعل في المصدر."
        },

        // --- Slide 6 Exercise (11 to 20) ---
        {
            question: "11. The Principal _______ to speak to Raj.",
            questionAr: "١١. المدير _______ التحدث إلى راج.",
            options: ["want", "wants", "wanted", "wanting"],
            optionsAr: ["want", "wants", "wanted", "wanting"],
            correct: 1,
            hint: "The Principal is singular (he/she), so add 's' in Present Simple.",
            hintAr: "المدير مفرد غائب، لذا نضيف s للفعل في المضارع البسيط."
        },
        {
            question: "12. The Earth _______ around the Sun.",
            questionAr: "١٢. الأرض _______ حول الشمس.",
            options: ["revolve", "revolves", "revolved", "revolving"],
            optionsAr: ["revolve", "revolves", "revolved", "revolving"],
            correct: 1,
            hint: "This is a Universal Truth. The Earth is singular (it).",
            hintAr: "هذه حقيقة كونية ثابتة، والأرض مفرد لذا نستخدم المضارع ونضيف s."
        },
        {
            question: "13. The baby _______ all day.",
            questionAr: "١٣. الطفل _______ طوال اليوم.",
            options: ["cry", "cries", "crys", "cried"],
            optionsAr: ["cry", "cries", "crys", "cried"],
            correct: 1,
            hint: "For verbs ending in consonant + y, drop 'y' and add 'ies' with singular subjects.",
            hintAr: "الأفعال المنتهية بـ ساكن + y نحذف حرف الـ y ونضيف ies مع المفرد."
        },
        {
            question: "14. The flight _______ at 8 o'clock in the morning.",
            questionAr: "١٤. الرحلة _______ الساعة 8 صباحاً.",
            options: ["leave", "leaves", "left", "leaving"],
            optionsAr: ["leave", "leaves", "left", "leaving"],
            correct: 1,
            hint: "Timetabled future events use Present Simple. Flight is singular.",
            hintAr: "جداول المواعيد الثابتة تستخدم مضارع بسيط. الرحلة مفرد فنضيف s."
        },
        {
            question: "15. What _______ so good?",
            questionAr: "١٥. ما الذي _______ رائحته جيدة هكذا؟",
            options: ["smell", "smells", "smelled", "smelling"],
            optionsAr: ["smell", "smells", "smelled", "smelling"],
            correct: 1,
            hint: "'What' acts as a singular subject here.",
            hintAr: "كلمة What تعامل كفاعل مفرد هنا، فنضيف s للفعل."
        },
        {
            question: "16. Hema _______ badminton every evening.",
            questionAr: "١٦. هيما _______ تنس الريشة كل مساء.",
            options: ["play", "plays", "played", "playing"],
            optionsAr: ["play", "plays", "played", "playing"],
            correct: 1,
            hint: "'Every evening' indicates a habit. Hema is singular.",
            hintAr: "كل مساء = عادة. وهيما اسم مفرد فنضيف s."
        },
        {
            question: "17. Tony _______ to guitar lessons every Sunday.",
            questionAr: "١٧. توني _______ لدروس الجيتار كل أحد.",
            options: ["go", "goes", "went", "going"],
            optionsAr: ["go", "goes", "went", "going"],
            correct: 1,
            hint: "Verbs ending in 'o' take 'es' for singular subjects (go -> goes).",
            hintAr: "الأفعال المنتهية بـ o نضع لها es مع الفاعل المفرد (go -> goes)."
        },
        {
            question: "18. If it _______ today, we will get stuck.",
            questionAr: "١٨. إذا _______ اليوم، سنعلق.",
            options: ["rain", "rains", "rained", "raining"],
            optionsAr: ["rain", "rains", "rained", "raining"],
            correct: 1,
            hint: "First conditional rule: If + Present Simple (it rains).",
            hintAr: "قاعدة if الأولى: جملة الشرط تكون في المضارع البسيط (it rains)."
        },
        {
            question: "19. The nurse _______ of my grandfather.",
            questionAr: "١٩. الممرضة _______ بجدي.",
            options: ["take care", "takes care", "took care", "taking care"],
            optionsAr: ["take care", "takes care", "took care", "taking care"],
            correct: 1,
            hint: "Permanent situation/job. 'The nurse' is singular.",
            hintAr: "وظيفة أو حالة دائمة، والممرضة اسم مفرد فنضيف s."
        },
        {
            question: "20. There _______ the topper of our school.",
            questionAr: "٢٠. ها _______ الطالب المتفوق في مدرستنا.",
            options: ["come", "comes", "came", "coming"],
            optionsAr: ["come", "comes", "came", "coming"],
            correct: 1,
            hint: "Exclamations starting with 'There' use Present Simple.",
            hintAr: "جمل التعجب التي تبدأ بـ There تستخدم المضارع البسيط."
        },

        // --- Concepts from Slides 7-13 (21 to 25) ---
        {
            question: "21. How many sounds exist in the English language compared to letters?",
            questionAr: "٢١. كم عدد الأصوات في اللغة الإنجليزية مقارنة بالحروف؟",
            options: ["26 letters, 26 sounds", "44 letters, 26 sounds", "26 letters, 44 sounds", "44 letters, 44 sounds"],
            optionsAr: ["26 letters, 26 sounds", "44 letters, 26 sounds", "26 letters, 44 sounds", "44 letters, 44 sounds"],
            correct: 2,
            hint: "English has 26 written letters but 44 spoken sounds.",
            hintAr: "الإنجليزية بها 26 حرفاً مكتوباً ولكن 44 صوتاً منطوقاً."
        },
        {
            question: "22. When you make a ________ sound, your throat vibrates.",
            questionAr: "٢٢. عندما تصدر صوتاً ________، تهتز حنجرتك.",
            options: ["Voiceless", "Short", "Voiced", "Distorted"],
            optionsAr: ["Voiceless", "Short", "Voiced", "Distorted"],
            correct: 2,
            hint: "Voiced sounds use vocal cords, causing vibration in your throat.",
            hintAr: "الأصوات المجهورة (Voiced) تستخدم الأحبال الصوتية مما يسبب اهتزازاً بالحنجرة."
        },
        {
            question: "23. Which of the following words contains a SHORT vowel sound?",
            questionAr: "٢٣. أي من الكلمات التالية تحتوي على صوت متحرك قصير (Short Vowel)؟",
            options: ["Mate", "Hope", "Mat", "Use"],
            optionsAr: ["Mate", "Hope", "Mat", "Use"],
            correct: 2,
            hint: "'Mat' has a short 'a', while 'Mate' has a long 'a'.",
            hintAr: "كلمة Mat بها صوت a قصير، بينما Mate بها صوت طويل."
        },
        {
            question: "24. A _______ vowel is where the sound it makes matches its spoken name in the alphabet.",
            questionAr: "٢٤. الحرف المتحرك _______ هو الذي يتطابق صوته مع اسمه في الأبجدية.",
            options: ["Short", "Voiceless", "Consonant", "Long"],
            optionsAr: ["Short", "Voiceless", "Consonant", "Long"],
            correct: 3,
            hint: "For example, the 'a' in 'cake' sounds exactly like the letter 'A' (Long Vowel).",
            hintAr: "مثل حرف a في cake يُنطق كاسمه في الأبجدية تماماً (Long Vowel)."
        },
        {
            question: "25. Which list contains ONLY words with LONG vowel sounds?",
            questionAr: "٢٥. أي قائمة تحتوي فقط على كلمات ذات أصوات متحركة طويلة؟",
            options: ["Oak, Sea, June", "Egg, Ant, Igloo", "Umbrella, Octopus, Mat", "Pet, Fill, Hop"],
            optionsAr: ["Oak, Sea, June", "Egg, Ant, Igloo", "Umbrella, Octopus, Mat", "Pet, Fill, Hop"],
            correct: 0,
            hint: "Oak, Sea, and June all have long vowel sounds.",
            hintAr: "كلمات Oak, Sea, June جميعها أصوات طويلة يمكن مدها."
        },

        // --- Slide 16 Matching Exercise (26 to 35) ---
        {
            question: "26. Which word contains a 'short a' sound?",
            questionAr: "٢٦. أي كلمة تحتوي على صوت 'a' قصير؟",
            options: ["page", "after", "easy", "kid"],
            optionsAr: ["page", "after", "easy", "kid"],
            correct: 1,
            hint: "Short 'a' is heard in 'after' and 'ant'.",
            hintAr: "صوت a القصير موجود في كلمة after."
        },
        {
            question: "27. Which word contains a 'long a' sound?",
            questionAr: "٢٧. أي كلمة تحتوي على صوت 'a' طويل؟",
            options: ["after", "page", "nest", "gum"],
            optionsAr: ["after", "page", "nest", "gum"],
            correct: 1,
            hint: "Long 'a' sounds like the alphabet name 'A' in 'page'.",
            hintAr: "صوت a الطويل يُنطق كاسم الحرف في كلمة page."
        },
        {
            question: "28. Which word contains a 'short e' sound?",
            questionAr: "٢٨. أي كلمة تحتوي على صوت 'e' قصير؟",
            options: ["nest", "easy", "fine", "nose"],
            optionsAr: ["nest", "easy", "fine", "nose"],
            correct: 0,
            hint: "Short 'e' is pronounced quickly in 'nest' and 'egg'.",
            hintAr: "صوت e القصير يُنطق سريعاً في كلمة nest."
        },
        {
            question: "29. Which word contains a 'long e' sound?",
            questionAr: "٢٩. أي كلمة تحتوي على صوت 'e' طويل؟",
            options: ["nest", "after", "easy", "kid"],
            optionsAr: ["nest", "after", "easy", "kid"],
            correct: 2,
            hint: "Long 'e' matches the alphabet sound in 'easy' and 'sea'.",
            hintAr: "صوت e الطويل يطابق اسم الحرف كما في easy و sea."
        },
        {
            question: "30. Which word contains a 'short i' sound?",
            questionAr: "٣٠. أي كلمة تحتوي على صوت 'i' قصير؟",
            options: ["fine", "kid", "huge", "hot"],
            optionsAr: ["fine", "kid", "huge", "hot"],
            correct: 1,
            hint: "Short 'i' is heard in 'kid' and 'igloo'.",
            hintAr: "صوت i القصير موجود في كلمة kid و igloo."
        },
        {
            question: "31. Which word contains a 'long i' sound?",
            questionAr: "٣١. أي كلمة تحتوي على صوت 'i' طويل؟",
            options: ["kid", "fine", "gum", "hot"],
            optionsAr: ["kid", "fine", "gum", "hot"],
            correct: 1,
            hint: "Long 'i' sounds like the alphabet name 'I' in 'fine' and 'island'.",
            hintAr: "صوت i الطويل يُنطق كاسم الحرف في fine و island."
        },
        {
            question: "32. Which word contains a 'short o' sound?",
            questionAr: "٣٢. أي كلمة تحتوي على صوت 'o' قصير؟",
            options: ["nose", "hot", "huge", "oak"],
            optionsAr: ["nose", "hot", "huge", "oak"],
            correct: 1,
            hint: "Short 'o' is heard in 'hot' and 'octopus'.",
            hintAr: "صوت o القصير موجود في hot و octopus."
        },
        {
            question: "33. Which word contains a 'long o' sound?",
            questionAr: "٣٣. أي كلمة تحتوي على صوت 'o' طويل؟",
            options: ["hot", "nose", "nest", "gum"],
            optionsAr: ["hot", "nose", "nest", "gum"],
            correct: 1,
            hint: "Long 'o' sounds like the alphabet name 'O' in 'nose' and 'oak'.",
            hintAr: "صوت o الطويل يُنطق كاسم الحرف في nose و oak."
        },
        {
            question: "34. Which word contains a 'short u' sound?",
            questionAr: "٣٤. أي كلمة تحتوي على صوت 'u' قصير؟",
            options: ["huge", "gum", "June", "fine"],
            optionsAr: ["huge", "gum", "June", "fine"],
            correct: 1,
            hint: "Short 'u' is heard in 'gum' and 'umbrella'.",
            hintAr: "صوت u القصير موجود في gum و umbrella."
        },
        {
            question: "35. Which word contains a 'long u' sound?",
            questionAr: "٣٥. أي كلمة تحتوي على صوت 'u' طويل؟",
            options: ["gum", "huge", "hot", "after"],
            optionsAr: ["gum", "huge", "hot", "after"],
            correct: 1,
            hint: "Long 'u' sounds like the alphabet name 'U' in 'huge' and 'use'.",
            hintAr: "صوت u الطويل يطابق اسم الحرف في huge و use."
        }
    ]
});