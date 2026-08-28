DataStore.lectures.push({
    id: 4,
    title: "Comparatives, '-s' Pronunciation & Writing",
    isPlaceholder: false,

    // =========================================================================
    // 1. REVISION SECTION (ENGLISH)
    // =========================================================================
    revision: [
        // --- Grammar: Comparatives & Superlatives ---
        { type: 'title', content: 'Part 1: Comparatives & Superlatives' },
        { type: 'text', content: '<b>Comparative Adjectives:</b> Used to describe a noun by comparing it to ONE other noun (e.g., bigger, smaller).<br><b>Superlative Adjectives:</b> Used to describe a noun by comparing it to TWO OR MORE nouns to the highest or lowest degree (e.g., biggest, smallest).' },
        
        { type: 'rule', title: '1. One Syllable Adjectives', content: 'Add <b>"-er"</b> for Comparative, and <b>"-est"</b> for Superlative.<br><i>*Note: When the adjective follows the CVC (Consonant-Vowel-Consonant) spelling, double the final consonant (e.g., hot -> hotter -> hottest).</i>' },
        {
            type: 'table',
            headers: ['Adjective', 'Comparative', 'Superlative'],
            rows: [
                ['Big', 'Bigger', 'Biggest'],
                ['Tall', 'Taller', 'Tallest'],
                ['Small', 'Smaller', 'Smallest'],
                ['Hot', 'Hotter', 'Hottest']
            ]
        },

        { type: 'rule', title: '2. Two Syllable Adjectives', content: 'Can be formed by adding the <b>"-er" / "-est"</b> ending OR by adding <b>"more / less"</b> (comparative) and <b>"most / least"</b> (superlative) before the adjective.' },
        {
            type: 'table',
            headers: ['Adjective', 'Comparative', 'Superlative'],
            rows: [
                ['Happy', 'Happier', 'Happiest'],
                ['Crazy', 'Crazier', 'Craziest'],
                ['Nervous', 'More/Less Nervous', 'Most/Least Nervous'],
                ['Massive', 'More/Less Massive', 'Most/Least Massive'],
                ['Quiet', 'Quieter or More/Less Quiet', 'Quietest or Most/Least Quiet']
            ]
        },

        { type: 'rule', title: '3. Three or More Syllable Adjectives', content: 'In these cases, ALWAYS add <b>"more / less"</b> before a comparative adjective and <b>"most / least"</b> before a superlative adjective.' },
        {
            type: 'table',
            headers: ['Adjective', 'Comparative', 'Superlative'],
            rows: [
                ['Mysterious', 'More/Less Mysterious', 'Most/Least Mysterious'],
                ['Complicated', 'More/Less Complicated', 'Most/Least Complicated'],
                ['Wonderful', 'More/Less Wonderful', 'Most/Least Wonderful']
            ]
        },

        { type: 'mistake', content: '<b>Irregular Adjectives:</b> A handful of adjectives do NOT follow regular rules and must be memorized!' },
        {
            type: 'table',
            headers: ['Adjective', 'Comparative', 'Superlative'],
            rows: [
                ['Good', 'Better', 'Best'],
                ['Bad or Ill', 'Worse', 'Worst'],
                ['Little (Amount)', 'Less', 'Least'],
                ['Far (Distance)', 'Farther', 'Farthest'],
                ['Far (Extent)', 'Further', 'Furthest'],
                ['Many or Much', 'More', 'Most']
            ]
        },

        // --- Phonics: Suffix "-s" ---
        { type: 'title', content: 'Part 2: Pronunciation of the "-s" Suffix' },
        { type: 'text', content: 'There are <b>3 ways</b> of pronouncing "-s" at the end of a word, depending on the final sound before it:<br>• <b>Sibilant:</b> Hissing or buzzing sound.<br>• <b>Voiceless:</b> Vocal cords do not vibrate.<br>• <b>Voiced:</b> Vocal cords produce a vibration or humming in the throat (includes all vowel sounds).' },
        {
            type: 'table',
            headers: ['/ɪz/ or /əz/ (Sibilant)', '/s/ (Voiceless)', '/z/ (Voiced & Vowels)'],
            rows: [
                ['Ends in: C, S, X, Z, SS, CH, SH, GE', 'Ends in: P, K, T, F, GH, PH', 'Ends in: B, D, G, L, M, N, NG, R, V, + Vowels'],
                ['races, buses, boxes, prizes, kisses, watches, dishes, changes', 'sleeps, books, hats, cliffs, laughs, graphs', 'crabs, words, bags, falls, dreams, fans, sings, wears, gloves, plays, sees, tries, follows, continues']
            ]
        },

        // --- Writing: Paragraphs ---
        { type: 'title', content: 'Part 3: Writing (How to Write a Paragraph)' },
        { type: 'rule', title: '1. Topic Sentences', content: 'States the <b>main idea</b>. Appears at the beginning of the paragraph in most academic essays.<br><b>A good topic sentence:</b><br>a) Introduces the rest of the paragraph.<br>b) Contains both a topic and an opinion.<br>c) Is clear and easy to follow.<br>d) <i>Does NOT include supporting details.</i><br>e) Engages the reader.' },
        { type: 'rule', title: '2. Supporting Ideas / Details', content: 'The body of a paragraph contains details to help <b>explain, prove, or expand</b> the topic sentence. They include:<br>1) <b>Fact:</b> Many families now rely on older relatives for financial support.<br>2) <b>Reason:</b> Life expectancy for an average American is increasing.<br>3) <b>Statistic:</b> More than 20 percent of adults over age 65 are working.<br>4) <b>Quotation:</b> Senator Ted Kennedy once said...<br>5) <b>Example:</b> Last year, my grandpa took a job with Walmart.' },
        { type: 'note', content: '<b>Signposting:</b> The Topic Sentence guides the reader, so every supporting sentence must relate to it. Any irrelevant sentence must be removed.' },
        { type: 'rule', title: '3. Concluding Sentences', content: 'Draws together the ideas raised in the paragraph. Reminds readers of the main point <i>without repeating the same words</i>.<br>It can: 1) Summarize key points, 2) Draw a conclusion, 3) Make a prediction, suggestion, or recommendation.' }
    ],

    // =========================================================================
    // 2. REVISION SECTION (ARABIC TRANSLATION)
    // =========================================================================
    revisionAr: [
        // --- Grammar ---
        { type: 'title', content: 'الجزء الأول: المقارنة والتفضيل (Comparatives & Superlatives)' },
        { type: 'text', content: '<b>صفات المقارنة (Comparative):</b> تُستخدم للمقارنة بين اسم واسم آخر (واحد لواحد) مثل: bigger أو smaller.<br><b>صفات التفضيل (Superlative):</b> تُستخدم لوصف الاسم عند مقارنته باثنين أو أكثر للوصول لأعلى أو أدنى درجة مثل: biggest أو smallest.' },
        
        { type: 'rule', title: '١. الصفات ذات المقطع الواحد (One Syllable)', content: 'نضيف <b>"-er"</b> للمقارنة، و <b>"-est"</b> للتفضيل.<br><i>*ملاحظة: إذا انتهت الصفة بـ CVC (حرف ساكن - متحرك - ساكن)، نضاعف الحرف الساكن الأخير (مثل: hot -> hotter -> hottest).</i>' },
        {
            type: 'table',
            headers: ['الصفة (Adjective)', 'المقارنة (Comparative)', 'التفضيل (Superlative)'],
            rows: [
                ['Big (كبير)', 'Bigger', 'Biggest'],
                ['Tall (طويل)', 'Taller', 'Tallest'],
                ['Small (صغير)', 'Smaller', 'Smallest'],
                ['Hot (حار)', 'Hotter', 'Hottest']
            ]
        },

        { type: 'rule', title: '٢. الصفات ذات المقطعين (Two Syllables)', content: 'تُصاغ إما بإضافة النهاية <b>"-er / -est"</b> أو بوضع <b>"more / less"</b> للمقارنة و <b>"most / least"</b> للتفضيل قبل الصفة.' },
        {
            type: 'table',
            headers: ['الصفة', 'المقارنة', 'التفضيل'],
            rows: [
                ['Happy (سعيد)', 'Happier', 'Happiest'],
                ['Crazy (مجنون)', 'Crazier', 'Craziest'],
                ['Nervous (متوتر)', 'More/Less Nervous', 'Most/Least Nervous'],
                ['Massive (ضخم)', 'More/Less Massive', 'Most/Least Massive'],
                ['Quiet (هادئ)', 'Quieter أو More/Less Quiet', 'Quietest أو Most/Least Quiet']
            ]
        },

        { type: 'rule', title: '٣. الصفات ذات الثلاثة مقاطع أو أكثر', content: 'دائماً نضع <b>"more / less"</b> قبل صفة المقارنة، و <b>"most / least"</b> قبل صفة التفضيل.' },
        {
            type: 'table',
            headers: ['الصفة', 'المقارنة', 'التفضيل'],
            rows: [
                ['Mysterious (غامض)', 'More/Less Mysterious', 'Most/Least Mysterious'],
                ['Complicated (معقد)', 'More/Less Complicated', 'Most/Least Complicated'],
                ['Wonderful (رائع)', 'More/Less Wonderful', 'Most/Least Wonderful']
            ]
        },

        { type: 'mistake', content: '<b>الصفات الشاذة (Irregular Adjectives):</b> صفات شاذة لا تتبع القواعد ويجب حفظها عن ظهر قلب!' },
        {
            type: 'table',
            headers: ['الصفة', 'المقارنة', 'التفضيل'],
            rows: [
                ['Good (جيد)', 'Better', 'Best'],
                ['Bad or Ill (سيئ/مريض)', 'Worse', 'Worst'],
                ['Little (قليل للكمية)', 'Less', 'Least'],
                ['Far (بعيد للمسافة)', 'Farther', 'Farthest'],
                ['Far (بعيد للمدى/التوسع)', 'Further', 'Furthest'],
                ['Many or Much (كثير)', 'More', 'Most']
            ]
        },

        // --- Phonics ---
        { type: 'title', content: 'الجزء الثاني: نطق حرف الـ "-s" في نهاية الكلمة' },
        { type: 'text', content: 'توجد <b>3 طرق</b> لنطق الـ "-s" اعتماداً على الصوت الأخير قبلها:<br>• <b>صوت صفيري (Sibilant):</b> صوت هسهسة أو أزيز.<br>• <b>صوت مهموس (Voiceless):</b> الأحبال الصوتية لا تهتز أثناء نطقه.<br>• <b>صوت مجهور (Voiced):</b> تهتز فيه الأحبال الصوتية في الحلق (وتشمل جميع الأصوات المتحركة Vowels).' },
        {
            type: 'table',
            headers: ['/ɪz/ (صفيري)', '/s/ (مهموس)', '/z/ (مجهور ومتحرك)'],
            rows: [
                ['إذا انتهت بـ: C, S, X, Z, SS, CH, SH, GE', 'إذا انتهت بـ: P, K, T, F, GH, PH', 'إذا انتهت بـ: B, D, G, L, M, N, NG, R, V، أو أي حرف متحرك'],
                ['races, buses, boxes, prizes, kisses, watches, dishes, changes', 'sleeps, books, hats, cliffs, laughs, graphs', 'crabs, words, bags, falls, dreams, fans, sings, wears, gloves, plays, sees, tries, follows, continues']
            ]
        },

        // --- Writing ---
        { type: 'title', content: 'الجزء الثالث: مهارة الكتابة (How to Write a Paragraph)' },
        { type: 'rule', title: '١. الجملة الافتتاحية (Topic Sentence)', content: 'توضح <b>الفكرة الرئيسية</b> للفقرة وتأتي في البداية.<br><b>شروط الجملة الافتتاحية الجيدة:</b><br>أ) تُمهد لباقي الفقرة.<br>ب) تحتوي على موضوع ورأي.<br>ج) واضحة وسهلة الفهم.<br>د) <i>لا تحتوي على تفاصيل أو أمثلة داعمة.</i><br>هـ) تجذب اهتمام القارئ.' },
        { type: 'rule', title: '٢. الجمل والتفاصيل الداعمة (Supporting Details)', content: 'جسم الفقرة ويساعد في <b>شرح، إثبات، أو توسيع</b> الفكرة الرئيسية عبر:<br>١) <b>حقيقة (Fact)</b><br>٢) <b>سبب (Reason)</b><br>٣) <b>إحصائية (Statistic)</b><br>٤) <b>اقتباس (Quotation)</b><br>٥) <b>مثال (Example)</b>' },
        { type: 'note', content: '<b>التوجيه والربط (Signposting):</b> الجملة الافتتاحية تقود القارئ، لذا يجب أن ترتبط كل جملة فرعية بها مباشرة وأي جملة خارجة عن الموضوع تُحذف.' },
        { type: 'rule', title: '٣. الجملة الختامية (Concluding Sentence)', content: 'تجمع أفكار الفقرة وتُذكّر القارئ بالفكرة الرئيسية <i>دون تكرار نفس الكلمات حرفياً</i>.<br>يمكنها: تلخيص النقاط، استنتاج خلاصة، أو تقديم توصية وتوقع.' }
    ],

    // =========================================================================
    // 3. QUIZ SECTION (30 Comprehensive Questions)
    // =========================================================================
    quiz: [
        // --- Grammar: Fill in the blanks (PDF Page 7) ---
        {
            question: "1. Carla is _______ (good) than you at sport.",
            questionAr: "١. كارلا _______ (جيدة) منك في الرياضة.",
            options: ["gooder", "more good", "better", "best"],
            optionsAr: ["gooder", "more good", "better", "best"],
            correct: 2,
            hint: "'Good' is an irregular adjective. The comparative form is 'better'.",
            hintAr: "كلمة Good صفة شاذة، المقارنة منها هي better."
        },
        {
            question: "2. We like wearing the _______ (late) fashion.",
            questionAr: "٢. نحن نحب ارتداء _______ (أحدث) صيحات الموضة.",
            options: ["later", "latest", "more late", "most late"],
            optionsAr: ["later", "latest", "more late", "most late"],
            correct: 1,
            hint: "We are referring to the superlative form ('the latest').",
            hintAr: "صيغة تفضيل مسبوقة بـ the فنقول the latest."
        },
        {
            question: "3. These trousers are _______ (comfortable) than those jeans.",
            questionAr: "٣. هذا البنطال _______ (مريح) من ذلك الجينز.",
            options: ["comfortabler", "more comfortable", "most comfortable", "comfortable"],
            optionsAr: ["comfortabler", "more comfortable", "most comfortable", "comfortable"],
            correct: 1,
            hint: "'Comfortable' has 3+ syllables, so we use 'more' for comparison.",
            hintAr: "الصفة طويلة (أكثر من مقطعين) فنضع قبلها more للمقارنة."
        },
        {
            question: "4. He is _______ (happy) now than he was last year.",
            questionAr: "٤. هو _______ (سعيد) الآن مما كان عليه العام الماضي.",
            options: ["happyer", "happier", "more happy", "happiest"],
            optionsAr: ["happyer", "happier", "more happy", "happiest"],
            correct: 1,
            hint: "Two-syllable adjective ending in 'y': change 'y' to 'i' and add '-er'.",
            hintAr: "صفة منتهية بـ y نقلب الـ y إلى i ونضيف er."
        },
        {
            question: "5. You are the _______ (tall) girl in class.",
            questionAr: "٥. أنتِ _______ (طويلة) فتاة في الفصل.",
            options: ["taller", "tallest", "most tall", "more tall"],
            optionsAr: ["taller", "tallest", "most tall", "more tall"],
            correct: 1,
            hint: "Comparing one girl to the whole class (Superlative) -> add '-est'.",
            hintAr: "مقارنة واحدة بالمجموعة كاملة (تفضيل) -> tallest."
        },
        {
            question: "6. My father is _______ (old) than my uncle.",
            questionAr: "٦. والدي _______ (أكبر سناً) من عمي.",
            options: ["older", "oldest", "more old", "most old"],
            optionsAr: ["older", "oldest", "more old", "most old"],
            correct: 0,
            hint: "Comparative of 'old' with 'than' -> 'older'.",
            hintAr: "مقارنة بين اثنين متبوعة بـ than -> older."
        },
        {
            question: "7. The red dress is the _______ (attractive) dress in the shop.",
            questionAr: "٧. الفستان الأحمر هو _______ (الأكثر جاذبية) في المتجر.",
            options: ["attractiver", "more attractive", "most attractive", "attractive"],
            optionsAr: ["attractiver", "more attractive", "most attractive", "attractive"],
            correct: 2,
            hint: "'Attractive' is a long adjective. Preceded by 'the' -> 'most attractive'.",
            hintAr: "صفة طويلة مسبوقة بـ the في التفضيل تأخذ most attractive."
        },
        {
            question: "8. I always tell the _______ (fun) jokes to my friends.",
            questionAr: "٨. أنا دائماً ألقي النكات _______ (الأكثر إضحاكاً) لأصدقائي.",
            options: ["funnier", "funniest", "more funny", "funner"],
            optionsAr: ["funnier", "funniest", "more funny", "funner"],
            correct: 1,
            hint: "Superlative of funny -> funniest.",
            hintAr: "صيغة التفضيل من funny هي funniest."
        },
        {
            question: "9. Your hair is _______ (curly) than my hair.",
            questionAr: "٩. شعرك _______ (أكثر تجعداً) من شعري.",
            options: ["curliest", "more curly", "curlyer", "curlier"],
            optionsAr: ["curliest", "more curly", "curlyer", "curlier"],
            correct: 3,
            hint: "Comparative of curly -> curlier.",
            hintAr: "صيغة المقارنة من curly هي curlier."
        },
        {
            question: "10. My hair is _______ (short) than yours.",
            questionAr: "١٠. شعري _______ (أقصر) من شعرك.",
            options: ["shorter", "shortest", "more short", "short"],
            optionsAr: ["shorter", "shortest", "more short", "short"],
            correct: 0,
            hint: "One syllable comparative -> add '-er' -> shorter.",
            hintAr: "صفة مقطع واحد في المقارنة نضيف لها er -> shorter."
        },

        // --- Grammar: Write the comparative (PDF Page 8) ---
        {
            question: "11. What is the comparative form of 'Strong'?",
            questionAr: "١١. ما هي صيغة المقارنة من كلمة 'Strong'؟",
            options: ["Stronger", "More strong", "Strongest", "Strongier"],
            optionsAr: ["Stronger", "More strong", "Strongest", "Strongier"],
            correct: 0,
            hint: "One syllable -> add '-er'.",
            hintAr: "صفة من مقطع واحد تأخذ er -> stronger."
        },
        {
            question: "12. What is the comparative form of 'Modern'?",
            questionAr: "١٢. ما هي صيغة المقارنة من كلمة 'Modern'؟",
            options: ["Moderner", "More modern", "Modernest", "Most modern"],
            optionsAr: ["Moderner", "More modern", "Modernest", "Most modern"],
            correct: 1,
            hint: "'Modern' takes 'more' for comparative form.",
            hintAr: "كلمة Modern تأخذ more modern في المقارنة."
        },
        {
            question: "13. What is the comparative form of 'Important'?",
            questionAr: "١٣. ما هي صيغة المقارنة من كلمة 'Important'؟",
            options: ["Importanter", "More important", "Importantest", "Most important"],
            optionsAr: ["Importanter", "More important", "Importantest", "Most important"],
            correct: 1,
            hint: "Long adjective (3 syllables) -> More important.",
            hintAr: "صفة طويلة مكونة من 3 مقاطع -> more important."
        },
        {
            question: "14. What is the comparative form of 'Large'?",
            questionAr: "١٤. ما هي صيغة المقارنة من كلمة 'Large'؟",
            options: ["Larger", "More large", "Largest", "Largger"],
            optionsAr: ["Larger", "More large", "Largest", "Largger"],
            correct: 0,
            hint: "Ends in 'e', just add '-r' -> larger.",
            hintAr: "تنتهي بـ e فنكتفي بإضافة r -> larger."
        },
        {
            question: "15. What is the comparative form of 'Serious'?",
            questionAr: "١٥. ما هي صيغة المقارنة من كلمة 'Serious'؟",
            options: ["Seriouser", "More serious", "Serioust", "Most serious"],
            optionsAr: ["Seriouser", "More serious", "Serioust", "Most serious"],
            correct: 1,
            hint: "Takes 'more' -> more serious.",
            hintAr: "تأخذ more serious في المقارنة."
        },
        {
            question: "16. What is the comparative form of 'Pretty'?",
            questionAr: "١٦. ما هي صيغة المقارنة من كلمة 'Pretty'؟",
            options: ["Prettyer", "Prettier", "More pretty", "Prettiest"],
            optionsAr: ["Prettyer", "Prettier", "More pretty", "Prettiest"],
            correct: 1,
            hint: "Change 'y' to 'i' and add '-er' -> prettier.",
            hintAr: "تنتهي بـ y تُقلب إلى i ونضيف er -> prettier."
        },
        {
            question: "17. What is the comparative form of 'Bad'?",
            questionAr: "١٧. ما هي صيغة المقارنة من كلمة 'Bad'؟",
            options: ["Badder", "Worse", "Worst", "More bad"],
            optionsAr: ["Badder", "Worse", "Worst", "More bad"],
            correct: 1,
            hint: "'Bad' is irregular: bad -> worse -> worst.",
            hintAr: "صفة شاذة: bad تصبح worse في المقارنة."
        },

        // --- Phonics: '-s' Pronunciation (PDF Page 10 & 12) ---
        {
            question: "18. How is the '-s' pronounced in the word 'Crabs'?",
            questionAr: "١٨. كيف يُنطق حرف '-s' في كلمة 'Crabs'؟",
            options: ["/s/", "/z/", "/ɪz/", "Silent"],
            optionsAr: ["/s/", "/z/", "/ɪz/", "Silent"],
            correct: 1,
            hint: "Ends in voiced sound /b/ -> /z/.",
            hintAr: "تنتهي بصوت b المجهور، لذا تُنطق /z/."
        },
        {
            question: "19. How is the '-s' pronounced in the word 'Buses'?",
            questionAr: "١٩. كيف يُنطق حرف '-s' في كلمة 'Buses'؟",
            options: ["/s/", "/z/", "/ɪz/", "Silent"],
            optionsAr: ["/s/", "/z/", "/ɪz/", "Silent"],
            correct: 2,
            hint: "Ends in sibilant 's' -> /ɪz/.",
            hintAr: "تنتهي بصوت صفيري s لذا تأخذ /ɪz/."
        },
        {
            question: "20. How is the '-s' pronounced in the word 'Sleeps'?",
            questionAr: "٢٠. كيف يُنطق حرف '-s' في كلمة 'Sleeps'؟",
            options: ["/s/", "/z/", "/ɪz/", "Silent"],
            optionsAr: ["/s/", "/z/", "/ɪz/", "Silent"],
            correct: 0,
            hint: "Ends in voiceless sound /p/ -> /s/.",
            hintAr: "تنتهي بصوت p المهموس لذا تُنطق /s/."
        },
        {
            question: "21. How is the '-s' pronounced in the word 'Watches'?",
            questionAr: "٢١. كيف يُنطق حرف '-s' في كلمة 'Watches'؟",
            options: ["/s/", "/z/", "/ɪz/", "Silent"],
            optionsAr: ["/s/", "/z/", "/ɪz/", "Silent"],
            correct: 2,
            hint: "Ends in 'CH' sound -> /ɪz/.",
            hintAr: "تنتهي بصوت CH الصفيري لذا تُنطق /ɪz/."
        },
        {
            question: "22. How is the '-s' pronounced in the word 'Laughs'?",
            questionAr: "٢٢. كيف يُنطق حرف '-s' في كلمة 'Laughs'؟",
            options: ["/s/", "/z/", "/ɪz/", "Silent"],
            optionsAr: ["/s/", "/z/", "/ɪz/", "Silent"],
            correct: 0,
            hint: "'GH' here sounds like /f/ (voiceless) -> /s/.",
            hintAr: "تنتهي بصوت /f/ المهموس لذا تُنطق /s/."
        },
        {
            question: "23. How is the '-s' pronounced in the word 'Prizes'?",
            questionAr: "٢٣. كيف يُنطق حرف '-s' في كلمة 'Prizes'؟",
            options: ["/s/", "/z/", "/ɪz/", "Silent"],
            optionsAr: ["/s/", "/z/", "/ɪz/", "Silent"],
            correct: 2,
            hint: "Ends in 'Z' sound -> /ɪz/.",
            hintAr: "تنتهي بصوت Z الصفيري لذا تُنطق /ɪz/."
        },
        {
            question: "24. How is the '-s' pronounced in the word 'Plays'?",
            questionAr: "٢٤. كيف يُنطق حرف '-s' في كلمة 'Plays'؟",
            options: ["/s/", "/z/", "/ɪz/", "Silent"],
            optionsAr: ["/s/", "/z/", "/ɪz/", "Silent"],
            correct: 1,
            hint: "Ends in a vowel sound -> /z/.",
            hintAr: "تنتهي بصوت حرف علة (متحرك) لذا تُنطق /z/."
        },

        // --- Writing: Paragraphs (PDF Page 14 - 21) ---
        {
            question: "25. What is the main purpose of a Topic Sentence?",
            questionAr: "٢٥. ما هو الغرض الأساسي للجملة الافتتاحية (Topic Sentence)؟",
            options: ["To summarize the paragraph", "To state the main idea of the paragraph", "To give specific statistics", "To conclude the essay"],
            optionsAr: ["To summarize the paragraph", "To state the main idea of the paragraph", "To give specific statistics", "To conclude the essay"],
            correct: 1,
            hint: "The main idea of the paragraph is stated in the topic sentence.",
            hintAr: "الفكرة الرئيسية للفقرة تُذكر في الجملة الافتتاحية."
        },
        {
            question: "26. A good topic sentence does all of the following EXCEPT:",
            questionAr: "٢٦. الجملة الافتتاحية الجيدة تتضمن كل ما يلي ما عدا:",
            options: ["Introduces the rest of the paragraph", "Contains both a topic and an opinion", "Includes specific supporting details", "Is clear and easy to follow"],
            optionsAr: ["Introduces the rest of the paragraph", "Contains both a topic and an opinion", "Includes specific supporting details", "Is clear and easy to follow"],
            correct: 2,
            hint: "A good topic sentence does NOT include supporting details.",
            hintAr: "الجملة الافتتاحية لا يجب أن تتضمن تفاصيل فرعية داعمة."
        },
        {
            question: "27. Choose the best Topic Sentence for this paragraph:\n'_____ . North Americans send cards for many occasions. They send cards to family and friends on birthdays and holidays. They also send thank-you cards...'",
            questionAr: "٢٧. اختر أفضل جملة افتتاحية للفقرة التالية:\n'_____ . يرسل سكان أمريكا الشمالية البطاقات لمناسبات عديدة كأعياد الميلاد والعطلات وبطاقات الشكر...'",
            options: ["Sending cards is very popular in North America.", "Birthday cards are the most popular kind of card.", "It is important to send thank-you cards.", "Mail is better than the Internet."],
            optionsAr: ["Sending cards is very popular in North America.", "Birthday cards are the most popular kind of card.", "It is important to send thank-you cards.", "Mail is better than the Internet."],
            correct: 0,
            hint: "The correct answer is 'a'.",
            hintAr: ""
        },
        {
            question: "28. Choose the best Topic Sentence for this paragraph:\n'_____ . I enjoy summer sports like water skiing and baseball. The weather is usually sunny and hot... Gardening is my hobby...'",
            questionAr: "٢٨. اختر أفضل جملة افتتاحية للفقرة التالية:\n'_____ . أستمتع برياضات الصيف كالتزلج والبيسبول، والطقس مشمس، والبستنة هوايتي...'",
            options: ["I like to garden in summer.", "Summer is my favourite season.", "Summer is too short.", "I hate winter."],
            optionsAr: ["I like to garden in summer.", "Summer is my favourite season.", "Summer is too short.", "I hate winter."],
            correct: 1,
            hint: "The general main idea is 'Summer is my favourite season.'",
            hintAr: ""
        },
        {
            question: "29. Choose the best Topic Sentence for this paragraph:\n'_____ . First of all, we need money to repair old roads and build new roads. We also need more to pay teachers\' salaries... Finally, more tax money is needed...'",
            questionAr: "٢٩. اختر أفضل جملة افتتاحية للفقرة التالية:\n'_____ . أولاً، نحتاج للمال لإصلاح الطرق وبناء جديدة، ولرواتب المعلمين، وأموال ضرائب لمساعدة الفقراء...'",
            options: ["We should raise city taxes.", "City taxes are too high.", "City taxes pay for new roads.", "Teachers need higher salaries."],
            optionsAr: ["We should raise city taxes.", "City taxes are too high.", "City taxes pay for new roads.", "Teachers need higher salaries."],
            correct: 0,
            hint: "The correct topic sentence is 'We should raise city taxes.'",
            hintAr: ""
        },
        {
            question: "30. In a paragraph about wearing face masks during COVID-19, which sentence does NOT relate to the topic?\n'Health policy experts note that opposition to wearing a face mask... Seat belts are a good way to reduce the potential for physical injury in car accidents. Opposition to wearing a face mask...'",
            questionAr: "٣٠. في فقرة تتحدث عن ارتداء الكمامات، أي الجمل التالية خارجة عن سياق الموضوع (Off-topic)؟",
            options: ["The sentence discussing health policy experts", "The sentence about seat belts in car accidents", "The sentence about individual choice", "All sentences are related"],
            optionsAr: ["The sentence discussing health policy experts", "The sentence about seat belts in car accidents", "The sentence about individual choice", "All sentences are related"],
            correct: 1,
            hint: "The seat belt sentence does not relate to the topic sentence about face masks.",
            hintAr: "جملة أحزمة الأمان في الحوادث خارجة تماماً عن موضوع الكمامات."
        }
    ]
});