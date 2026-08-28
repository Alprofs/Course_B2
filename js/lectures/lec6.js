DataStore.lectures.push({
    id: 6,
    title: "Monumental Gifts & Animal Idioms",
    isPlaceholder: false,

    // =========================================================================
    // 1. REVISION SECTION (ENGLISH)
    // =========================================================================
    revision: [
        // --- Types of Buildings ---
        { type: 'title', content: 'Part 1: Types of Buildings' },
        { type: 'text', content: 'Vocabulary for different types of monumental and everyday buildings:' },
        {
            type: 'table',
            headers: ['Building', 'Meaning'],
            rows: [
                ['<b>Castle / Palace</b>', 'A large fortified building or royal residence.'],
                ['<b>Skyscraper</b>', 'A very tall, modern building with many storeys.'],
                ['<b>Concert Hall / Opera House</b>', 'A venue for musical performances and operas.'],
                ['<b>Temple / Museum</b>', 'A place of worship / A building displaying historical or artistic objects.'],
                ['<b>Government Building / Stadium</b>', 'Official administrative offices / An arena for sports and concerts.']
            ]
        },

        // --- Reading Context ---
        { type: 'title', content: 'Part 2: Reading Context (Monumental Gifts)' },
        { type: 'text', content: 'Throughout history, countries have given each other massive gifts. Here are three famous examples:' },
        { type: 'rule', title: '1. The Palace of Culture and Science (Poland)', content: 'It has <b>dominated</b> the Warsaw <b>skyline</b> for over 50 years. It was a gift from Joseph Stalin to the Polish people. <b>Construction</b> lasted from 1952 to 1955. Today, it <b>hosts</b> exhibitions and concerts.' },
        { type: 'rule', title: '2. The Statue of Liberty (USA)', content: 'A gift to America from the French people. They built it in France, <b>shipped</b> it across the ocean in 350 pieces, and rebuilt it in New York. About a million people watched the opening <b>parade</b> in 1886. It worked as a <b>lighthouse</b> until 1902.' },
        { type: 'rule', title: '3. Balmoral Castle (Scotland)', content: 'A present for Queen Victoria from Prince Albert in 1852. The royal family still <b>resides</b> there when they visit Scotland. Visitors can walk around the castle <b>grounds</b>.' },

        // --- Vocabulary ---
        { type: 'title', content: 'Part 3: Essential Vocabulary' },
        {
            type: 'table',
            headers: ['Word', 'Meaning', 'Example'],
            rows: [
                ['<b>Dominate</b>', 'To be the largest, most important, or noticeable part.', 'The skyscraper dominates the city skyline.'],
                ['<b>Skyline</b>', 'The outline of buildings against the sky.', 'New York has a famous skyline.'],
                ['<b>Landmark</b>', 'An easily recognizable building or feature.', 'The Cairo Tower is a famous landmark.'],
                ['<b>Host</b>', 'To provide space/resources for an event.', 'Our city will host the games.'],
                ['<b>Property</b>', 'Buildings or land owned by someone.', 'He owns a lot of property in London.'],
                ['<b>Lighthouse</b>', 'A tower with a light to guide ships away from rocks.', 'The lighthouse warns ships at night.'],
                ['<b>Grounds</b>', 'The land and gardens around a large building.', 'The grounds of the palace are beautiful.'],
                ['<b>Ship (v.)</b>', 'To send goods by ship, train, or truck.', 'They will ship the furniture next week.'],
                ['<b>Structure</b>', 'A building or something built from parts.', 'The new school is a steel and glass structure.'],
                ['<b>Generation</b>', 'All people born around the same time.', 'My grandparents are from another generation.'],
                ['<b>Belong to</b>', 'To be owned by someone.', 'Those trainers belong to me.'],
                ['<b>Last (v.)</b>', 'To continue for an amount of time.', 'The class lasts for ninety minutes.']
            ]
        },

        // --- Grammar 1: Quantifiers ---
        { type: 'title', content: 'Part 4: Quantifiers (Much, Many, A lot of, Few, Little, A bit of)' },
        {
            type: 'table',
            headers: ['Quantifier', 'Used with', 'Example'],
            rows: [
                ['<b>Many / (A) Few</b>', 'Countable plural nouns (cars, coins, countries)', 'Have you visited <b>many</b> countries? / I have <b>a few</b> coins.'],
                ['<b>Much / (A) Little / A bit of</b>', 'Uncountable nouns (petrol, rain, money, space)', 'We haven\'t got <b>much</b> petrol. / There is <b>a bit of</b> sun cream.'],
                ['<b>A lot of / Lots of</b>', 'Both Countable & Uncountable (affirmative)', 'We had <b>a lot of</b> rain last autumn.'],
                ['<b>Little vs. A Little</b>', 'Little = almost none (negative) | A little = small amount (positive)', 'There was <b>little</b> food (nearly empty).']
            ]
        },

        // --- Grammar 2: Past Simple vs Present Perfect ---
        { type: 'title', content: 'Part 5: Past Simple vs. Present Perfect' },
        { 
            type: 'table', 
            headers: ['Past Simple', 'Present Perfect (Have/Has + P.P)'], 
            rows: [
                ['Finished action in a <b>finished time period</b>.', 'Action connected to the present or in an <b>unfinished time</b>.'],
                ['Time words: <i>yesterday, last month, in 1994, in 455, ago, when I was young</i>.', 'Time words: <i>already, yet, ever, never, recently, this week, today</i>.'],
                ['Example: I <b>went</b> to the cinema last night.', 'Example: I <b>have never been</b> to Vienna.']
            ] 
        },
        { type: 'mistake', content: 'Do not use Present Perfect with a specific past time point!<br>Wrong: <i>I have visited my grandmother last month.</i><br>Right: <i>I <b>visited</b> my grandmother last month.</i>' },

        // --- Grammar 3: Present Simple vs Past Simple ---
        { type: 'title', content: 'Part 6: Present Simple vs. Past Simple' },
        {
            type: 'table',
            headers: ['Present Simple (Habits & Facts)', 'Past Simple (Past Events)'],
            rows: [
                ['Keywords: <i>usually, always, often, never, every day/year</i>.', 'Keywords: <i>yesterday, last night/week, ago, in 1994</i>.'],
                ['Example: My father usually <b>likes</b> his steak well-done.', 'Example: The dog <b>ate</b> its toy last night.'],
                ['Question: <b>Do/Does</b> + subject + base verb?', 'Question: <b>Did</b> + subject + base verb? (<i>Did you have a test?</i>)']
            ]
        },

        // --- Idioms ---
        { type: 'title', content: 'Part 7: Animal Idioms' },
        {
            type: 'table',
            headers: ['Idiom', 'Meaning', 'Example'],
            rows: [
                ['<b>Straight from the horse\'s mouth</b>', 'From a reliable, direct source.', 'I got it straight from the horse\'s mouth.'],
                ['<b>Fishy</b>', 'Strange and suspicious.', 'There is something fishy going on.'],
                ['<b>Smell a rat</b>', 'To suspect that something is wrong or dishonest.', 'The door is unlocked. I smell a rat.'],
                ['<b>Cat got your tongue?</b>', 'Used when someone is too quiet or unable to speak.', 'What\'s the matter? Cat got your tongue?']
            ]
        },

        // --- Writing Tip ---
        { type: 'note', content: '<b>Writing Practice:</b> Write down a 10-sentence paragraph on one of the following topics:<br>1. A big problem in education is...<br>2. A job I\'d really like to have.<br>3. Meeting myself in the future.' }
    ],

    // =========================================================================
    // 2. REVISION SECTION (ARABIC TRANSLATION)
    // =========================================================================
    revisionAr: [
        // --- Types of Buildings ---
        { type: 'title', content: 'الجزء الأول: أنواع المباني (Types of Buildings)' },
        {
            type: 'table',
            headers: ['المبنى', 'المعنى بالعربية'],
            rows: [
                ['<b>Castle / Palace</b>', 'قلعة / قصر'],
                ['<b>Skyscraper / Tower</b>', 'ناطحة سحاب / برج'],
                ['<b>Concert Hall / Opera House</b>', 'قاعة حفلات موسيقية / دار أوبرا'],
                ['<b>Temple / Museum</b>', 'معبد / متحف'],
                ['<b>Government Building / Stadium</b>', 'مبنى حكومي / استاد رياضي']
            ]
        },

        // --- Reading Context ---
        { type: 'title', content: 'الجزء الثاني: موضوع القراءة (هدايا تاريخية ضخمة)' },
        { type: 'rule', title: '1. قصر الثقافة والعلوم (بولندا)', content: 'هيمن على <b>أفق (skyline)</b> وارسو لأكثر من 50 عاماً. كان هدية من ستالين واستمر بناؤه من 1952 حتى 1955 ويستضيف المعارض والحفلات.' },
        { type: 'rule', title: '2. تمثال الحرية (الولايات المتحدة)', content: 'هدية من فرنسا، شُحن في 350 قطعة عام 1886، وعمل كـ <b>منارة (lighthouse)</b> لإرشاد السفن حتى عام 1902.' },
        { type: 'rule', title: '3. قلعة بالمورال (اسكتلندا)', content: 'هدية للملكة فيكتوريا عام 1852. لا تزال العائلة الملكية <b>تقيم (resides)</b> فيها، وتفتح <b>أراضيها وساحاتها (grounds)</b> للجمهور.' },

        // --- Vocabulary ---
        { type: 'title', content: 'الجزء الثالث: أهم المفردات' },
        {
            type: 'table',
            headers: ['الكلمة', 'المعنى العربي', 'مثال'],
            rows: [
                ['<b>Dominate</b>', 'يهيمن / يبرز ويسيطر في المشهد', 'ناطحة السحاب تهيمن على أفق المدينة.'],
                ['<b>Skyline</b>', 'الأفق (صورة المباني في مواجهة الأفق)', 'أفق مدينة نيويورك مشهور عالمياً.'],
                ['<b>Landmark</b>', 'معلم بارز يسهل الاستدلال به', 'برج القاهرة معلم بارز.'],
                ['<b>Host</b>', 'يستضيف حدثاً أو فعالية', 'مدينتنا ستستضيف الألعاب الأولمبية.'],
                ['<b>Property</b>', 'ممتلكات / عقارات وأراضي', 'يمتلك الكثير من العقارات في لندن.'],
                ['<b>Lighthouse</b>', 'منارة / فنار لإرشاد السفن', 'المنارة تحذر السفن من الصخور.'],
                ['<b>Grounds</b>', 'أراضي / حدائق وفناء مبنى ضخم', 'حدائق وأراضي القصر رائعة.'],
                ['<b>Ship (v.)</b>', 'يشحن بضائع بحراً أو براً', 'سيشحنون الأثاث إلى أستراليا.'],
                ['<b>Structure</b>', 'هيكل / مبنى معماري', 'المدرسة هيكل زجاجي وفولاذي.'],
                ['<b>Generation</b>', 'جيل (فئة عمرية)', 'أجدادي من جيل آخر.'],
                ['<b>Belong to</b>', 'يخص / ملك لـ', 'هذا الحذاء الرياضي يخصني.'],
                ['<b>Last (v.)</b>', 'يستمر أو يستغرق مدة زمنية', 'تستمر المحاضرة لمدة 90 دقيقة.']
            ]
        },

        // --- Grammar 1: Quantifiers ---
        { type: 'title', content: 'الجزء الرابع: محددات الكمية (Quantifiers)' },
        {
            type: 'table',
            headers: ['الكلمة', 'الاستخدام', 'مثال'],
            rows: [
                ['<b>Many / A few / Few</b>', 'مع الأسماء المعدودة الجمع (coins, countries)', 'Have you visited <b>many</b> countries?'],
                ['<b>Much / A little / Little / A bit of</b>', 'مع الأسماء غير المعدودة (petrol, food, space)', 'We haven\'t got <b>much</b> petrol.'],
                ['<b>A lot of</b>', 'مع المعدود وغير المعدود في الجمل المثبتة', 'We had <b>a lot of</b> rain.'],
                ['<b>Little مقابل Few</b>', 'Little/Few بدون (a) تعني كمية قليلة جداً لا تكفي (معنى سلبي).', 'There was <b>little</b> food (كانت شبه فارغة).']
            ]
        },

        // --- Grammar 2: Past Simple vs Present Perfect ---
        { type: 'title', content: 'الجزء الخامس: الماضي البسيط مقابل المضارع التام' },
        { 
            type: 'table', 
            headers: ['الماضي البسيط (Past Simple)', 'المضارع التام (Present Perfect)'], 
            rows: [
                ['حدث وقع في <b>وقت ماضي منتهٍ ومحدد</b>.', 'حدث مرتبط بالحاضر أو في <b>فترة زمنية لم تنتهِ بعد</b>.'],
                ['الكلمات الدالة: <i>yesterday, last month, ago, in 1994, in 455</i>.', 'الكلمات الدالة: <i>already, yet, ever, never, today, this week</i>.'],
                ['I <b>went</b> to the cinema last night.', 'I <b>have read</b> six books this week. (الأسبوع لم ينتهِ).']
            ] 
        },

        // --- Grammar 3: Present Simple vs Past Simple ---
        { type: 'title', content: 'الجزء السادس: المضارع البسيط مقابل الماضي البسيط' },
        {
            type: 'table',
            headers: ['المضارع البسيط (حقائق وعادات)', 'الماضي البسيط (أحداث ماضية)'],
            rows: [
                ['الكلمات: <i>usually, always, often, every day</i>.', 'الكلمات: <i>yesterday, last week, ago, in 1994</i>.'],
                ['المفرد يأخذ (s): My father usually <b>likes</b> steak.', 'الفعل في التصريف الثاني: The dog <b>ate</b> its toy.'],
                ['السؤال: <b>Do / Does</b> + المصدر', 'السؤال: <b>Did</b> + المصدر (<i>Did you have a test?</i>)']
            ]
        },

        // --- Idioms ---
        { type: 'title', content: 'الجزء السابع: مصطلحات الحيوانات (Animal Idioms)' },
        {
            type: 'table',
            headers: ['المصطلح', 'المعنى بالعربية'],
            rows: [
                ['<b>Straight from the horse\'s mouth</b>', 'من المصدر الموثوق مباشرة.'],
                ['<b>Fishy</b>', 'مريب / مشبوه / غير طبيعي.'],
                ['<b>Smell a rat</b>', 'يشك بأن هناك خديعة أو شيئاً غير سليم.'],
                ['<b>Cat got your tongue?</b>', 'القطة أكلت لسانك؟ (تُقال لمن يعجز عن الكلام فجأة).']
            ]
        },
        { type: 'note', content: '<b>مواضيع التعبير المقترحة:</b> مشكلة كبرى في التعليم، وظيفة تتمناها، أو مقابلة نفسك في المستقبل (فقرة من 10 جمل).' }
    ],

    // =========================================================================
    // 3. QUIZ SECTION (59 Comprehensive Questions)
    // =========================================================================
    quiz: [
        // --- 1. Reading Comprehension (PDF Page 4) ---
        {
            question: "1. The construction of the Palace of Culture and Science took:",
            questionAr: "١. استغرق بناء قصر الثقافة والعلوم:",
            options: ["a. over 50 years.", "b. 231 days.", "c. over three years.", "d. ten years."],
            optionsAr: ["أ. أكثر من 50 عاماً.", "ب. 231 يوماً.", "ج. أكثر من 3 سنوات.", "د. 10 سنوات."],
            correct: 2,
            hint: "The text says it lasted from May 1952 until July 1955 (slightly over 3 years).",
            hintAr: "النص يقول أنه استمر من مايو 1952 حتى يوليو 1955 (أي ما يزيد عن 3 سنوات بقليل)."
        },
        {
            question: "2. The Palace of Culture and Science:",
            questionAr: "٢. قصر الثقافة والعلوم:",
            options: ["a. has a terrace with good views on the top floor.", "b. has a variety of work, educational and leisure facilities.", "c. has a university that is visited by thousands of tourists.", "d. is not used today."],
            optionsAr: ["أ. يحتوي على شرفة ذات إطلالة في الطابق الأخير.", "ب. يحتوي على مرافق عمل وتعليم وترفيه متنوعة.", "ج. به جامعة يزورها آلاف السياح.", "د. غير مستخدم اليوم."],
            correct: 1,
            hint: "It includes theatres, swimming pool, museum, congress hall, and university rooms.",
            hintAr: "يحتوي على مسارح ومسبح ومتحف وقاعة مؤتمرات وغرف تعليمية تابعة للجامعة."
        },
        {
            question: "3. The Statue of Liberty:",
            questionAr: "٣. تمثال الحرية:",
            options: ["a. is the tallest building in New York.", "b. was the tallest building in New York.", "c. is now taller than it was in 1886.", "d. was built in New York."],
            optionsAr: ["أ. هو أطول مبنى في نيويورك حالياً.", "ب. كان أطول مبنى في نيويورك في ذلك الوقت.", "ج. هو الآن أطول مما كان عليه عام 1886.", "د. تم بناؤه في نيويورك."],
            correct: 1,
            hint: "The text states: 'At the time, the Statue of Liberty was the tallest structure in New York'.",
            hintAr: "النص يوضح: 'في ذلك الوقت، كان أطول هيكل في نيويورك'."
        },
        {
            question: "4. The Statue of Liberty:",
            questionAr: "٤. تمثال الحرية:",
            options: ["a. is 40 kilometres away from the coast.", "b. is still working as a lighthouse.", "c. helped sailors in the past.", "d. has no stairs."],
            optionsAr: ["أ. يبعد 40 كم عن الساحل.", "ب. ما زال يعمل كمنارة.", "ج. ساعد البحارة في الماضي.", "د. لا يحتوي على سلالم."],
            correct: 2,
            hint: "It functioned as a lighthouse until 1902, guiding ships' captains.",
            hintAr: "عمل كمنارة حتى عام 1902 وكان يساعد قباطنة السفن بضوئه."
        },
        {
            question: "5. Today, Balmoral Castle is:",
            questionAr: "٥. قلعة بالمورال اليوم:",
            options: ["a. a tourist attraction and the queen's home in Scotland.", "b. a private home for the queen and her family only.", "c. a place for visitors to have dances and parties.", "d. abandoned."],
            optionsAr: ["أ. مزار سياحي ومقر إقامة للملكة في اسكتلندا.", "ب. منزل خاص للعائلة فقط ومغلق تماماً.", "ج. مكان لإقامة حفلات الرقص للزوار.", "د. مهجور."],
            correct: 0,
            hint: "The royal family resides there AND its grounds/ballroom are open to visitors.",
            hintAr: "العائلة المالكة تقيم فيه، وفي نفس الوقت ساحاته وقاعته مفتوحة للزوار."
        },

        // --- 2. Vocabulary - Activate (PDF Page 5 - All 15 Questions) ---
        {
            question: "6. He's very rich and he's got a lot of ________. He's got houses in London and New York.",
            questionAr: "٦. هو غني جداً ولديه الكثير من ________. يمتلك منازل في لندن ونيويورك.",
            options: ["property", "skyline", "parade", "lighthouse"],
            optionsAr: ["عقارات/ممتلكات", "أفق المباني", "موكب احتفالي", "منارة"],
            correct: 0,
            hint: "Houses and land are referred to as 'property'.",
            hintAr: "المنازل والأراضي تسمى property."
        },
        {
            question: "7. ________ of the new sports stadium took three years.",
            questionAr: "٧. استغرق ________ الاستاد الرياضي الجديد ثلاث سنوات.",
            options: ["Construction", "Generation", "Landmark", "Structure"],
            optionsAr: ["بناء / تشييد", "جيل", "معلم بارز", "هيكل"],
            correct: 0,
            hint: "The process of building something is 'construction'.",
            hintAr: "عملية التشييد والبناء تسمى Construction."
        },
        {
            question: "8. The palace is a huge building and it ________ the centre of the city.",
            questionAr: "٨. القصر مبنى ضخم وهو ________ على وسط المدينة.",
            options: ["dominates", "resides", "hosts", "lasts"],
            optionsAr: ["يهيمن / يبرز فوق", "يقيم", "يستضيف", "يستمر"],
            correct: 0,
            hint: "To be the most noticeable and imposing feature is to 'dominate'.",
            hintAr: "البروز والسيطرة على المشهد المعماري تعني dominates."
        },
        {
            question: "9. When the team won the cup there was a ________ through the city streets to celebrate.",
            questionAr: "٩. عندما فاز الفريق بالكأس، كان هناك ________ عبر شوارع المدينة للاحتفال.",
            options: ["parade", "lighthouse", "generation", "grounds"],
            optionsAr: ["موكب احتفالي", "منارة", "جيل", "أراضي/ساحات"],
            correct: 0,
            hint: "A celebratory procession along streets is a 'parade'.",
            hintAr: "المسيرة الاحتفالية في الشارع تسمى parade."
        },
        {
            question: "10. There are a lot of dangerous big rocks under the sea near the ________.",
            questionAr: "١٠. توجد صخور كبيرة وخطيرة تحت البحر بالقرب من ________.",
            options: ["lighthouse", "skyline", "generation", "parade"],
            optionsAr: ["المنارة", "الأفق", "الجيل", "الموكب"],
            correct: 0,
            hint: "A lighthouse is built near dangerous shores and rocks to warn ships.",
            hintAr: "المنارة lighthouse تُبنى لتحذير السفن من الصخور الخطرة."
        },
        {
            question: "11. We've got a long English class every Monday. It ________ for an hour and a half.",
            questionAr: "١١. لدينا حصة إنجليزية طويلة كل اثنين. إنها ________ لمدة ساعة ونصف.",
            options: ["lasts", "resides", "hosts", "dominates"],
            optionsAr: ["تستمر", "تقيم", "تستضيف", "تهيمن"],
            correct: 0,
            hint: "To continue in time is to 'last'.",
            hintAr: "الاستمرار لفترة زمنية يُعبر عنه بـ lasts."
        },
        {
            question: "12. The New York ________ with all its skyscrapers is probably the most famous in the world.",
            questionAr: "١٢. لعل ________ نيويورك بكل ناطحات السحاب فيه هو الأشهر في العالم.",
            options: ["skyline", "parade", "structure", "grounds"],
            optionsAr: ["أفق المباني", "موكب", "هيكل", "أراضي"],
            correct: 0,
            hint: "The outline of high-rise buildings against the horizon is a 'skyline'.",
            hintAr: "خط الأفق مع ناطحات السحاب يسمى skyline."
        },
        {
            question: "13. The gardens in the ________ of the palace are full of beautiful flowers.",
            questionAr: "١٣. الحدائق الموجودة في ________ القصر مليئة بالزهور الجميلة.",
            options: ["grounds", "skyline", "lighthouse", "parade"],
            optionsAr: ["ساحات / أراضي", "أفق", "منارة", "موكب"],
            correct: 0,
            hint: "The land/gardens surrounding a palace/mansion are called 'grounds'.",
            hintAr: "أراضي وحدائق القصر المحيطة به تسمى grounds."
        },
        {
            question: "14. I don't think our city can ________ the Olympic games. It's an enormous and expensive event.",
            questionAr: "١٤. لا أعتقد أن مدينتنا تستطيع ________ الألعاب الأولمبية. إنه حدث ضخم ومكلف.",
            options: ["host", "reside", "dominate", "last"],
            optionsAr: ["استضافة", "الإقامة في", "الهيمنة على", "الاستمرار"],
            correct: 0,
            hint: "To organize and provide facilities for an event is to 'host' it.",
            hintAr: "تنظيم وتوفير مرافق لحدث ما يعني host."
        },
        {
            question: "15. If you get lost, use the Cairo Tower as a ________. You can see it from everywhere.",
            questionAr: "١٥. إذا ضللت الطريق، استخدم برج القاهرة كـ ________. يمكنك رؤيته من كل مكان.",
            options: ["landmark", "property", "generation", "ship"],
            optionsAr: ["معلم بارز", "عقار", "جيل", "شحن"],
            correct: 0,
            hint: "A prominent, easily recognized building used for orientation is a 'landmark'.",
            hintAr: "المعلم البارز الشهير يسمى landmark."
        },
        {
            question: "16. They are going to ________ our furniture to Sydney when our dad has found a flat for us there.",
            questionAr: "١٦. إنهم ذاهبون إلى ________ أثاثنا إلى سيدني عندما يجد والدنا شقة لنا هناك.",
            options: ["ship", "host", "dominate", "belong"],
            optionsAr: ["شحن", "استضافة", "الهيمنة على", "الانتماء"],
            correct: 0,
            hint: "To transport large goods across distances is to 'ship' them.",
            hintAr: "نقل وشحن الأثاث والبضائع يسمى ship."
        },
        {
            question: "17. The new school will be a three-storey glass and steel ________.",
            questionAr: "١٧. ستكون المدرسة الجديدة عبارة عن ________ من ثلاثة طوابق من الزجاج والصلب.",
            options: ["structure", "skyline", "parade", "property"],
            optionsAr: ["هيكل / صرح بنائي", "أفق", "موكب", "ملكية"],
            correct: 0,
            hint: "A building constructed of specific materials is called a 'structure'.",
            hintAr: "المبنى المعماري المشيد يُطلق عليه structure."
        },
        {
            question: "18. The president of France ________ in the Élysée Palace in Paris.",
            questionAr: "١٨. رئيس فرنسا ________ في قصر الإليزيه في باريس.",
            options: ["resides", "lasts", "hosts", "dominates"],
            optionsAr: ["يقيم", "يستمر", "يستضيف", "يهيمن"],
            correct: 0,
            hint: "To have one's official home/residence somewhere is to 'reside'.",
            hintAr: "الإقامة والسكن الرسمي تعني resides."
        },
        {
            question: "19. My grandparents are from another ________ and they don't understand computers and the internet.",
            questionAr: "١٩. أجدادي من ________ آخر وهم لا يفهمون أجهزة الكمبيوتر والإنترنت.",
            options: ["generation", "structure", "landmark", "grounds"],
            optionsAr: ["جيل", "هيكل", "معلم بارز", "أراضي"],
            correct: 0,
            hint: "People of an older age group belong to another 'generation'.",
            hintAr: "فئة عمرية أو زمنية تسمى generation."
        },
        {
            question: "20. Those trainers ________ me. They're mine, not yours!",
            questionAr: "٢٠. هذا الحذاء الرياضي ________. إنه ملكي وليس ملكك!",
            options: ["belong to", "reside in", "dominate", "ship to"],
            optionsAr: ["يخص / ملك لـ", "يقيم في", "يهيمن على", "يُشحن إلى"],
            correct: 0,
            hint: "To be someone's possession is to 'belong to' them.",
            hintAr: "كون الشيء ملكاً لشخص يقال لها belong to."
        },

        // --- 3. Quantifiers (PDF Page 6 - All 8 Questions) ---
        {
            question: "21. We haven't got ________ petrol. We need to stop and get some.",
            questionAr: "٢١. ليس لدينا ________ بنزين. نحتاج للتوقف والتزود بالوقود.",
            options: ["much", "many", "little", "few"],
            optionsAr: ["much (كثير - للمنفي غير المعدود)", "many (كثير - للمعدود)", "little (قليل)", "few (قليل)"],
            correct: 0,
            hint: "Petrol is uncountable. In negative sentences, use 'much'.",
            hintAr: "البنزين غير معدود، وفي النفي نستخدم much."
        },
        {
            question: "22. We had ________ rain last autumn.",
            questionAr: "٢٢. سقط لدينا ________ مطر الخريف الماضي.",
            options: ["a lot of", "much", "many", "few"],
            optionsAr: ["a lot of (الكثير من)", "much", "many", "few"],
            correct: 0,
            hint: "In affirmative sentences with uncountable nouns, 'a lot of' is most natural.",
            hintAr: "في الجمل المثبتة مع غير المعدود نستخدم a lot of."
        },
        {
            question: "23. There was ________ food in the fridge. It was nearly empty.",
            questionAr: "٢٣. كان هناك طعام ________ في الثلاجة. كانت شبه فارغة.",
            options: ["little", "a little", "few", "many"],
            optionsAr: ["little (قليل جداً لا يكفي)", "a little (قليل يكفي)", "few", "many"],
            correct: 0,
            hint: "Food is uncountable. 'Nearly empty' implies almost no food -> 'little'.",
            hintAr: "الثلاجة شبه فارغة، أي قليل جداً ويكاد ينعدم (معنى سلبي) -> little."
        },
        {
            question: "24. You travel a lot. Have you been to ________ countries?",
            questionAr: "٢٤. أنت تسافر كثيراً. هل زرت ________ بلداً؟",
            options: ["many", "much", "little", "a bit"],
            optionsAr: ["many (الكثير من - للمعدود)", "much", "little", "a bit"],
            correct: 0,
            hint: "Countries is a countable plural noun in a question -> 'many'.",
            hintAr: "البلدان اسم معدود جمع وفي السؤال نستخدم many."
        },
        {
            question: "25. It costs ________ money to give your children a good education.",
            questionAr: "٢٥. إنه يكلف ________ مال لمنح أطفالك تعليماً جيداً.",
            options: ["a lot of", "much", "many", "few"],
            optionsAr: ["a lot of (الكثير من)", "much", "many", "few"],
            correct: 0,
            hint: "'Money' is uncountable, and in an affirmative sentence we use 'a lot of'.",
            hintAr: "جملة مثبتة مع كلمة money غير المعدودة -> نستخدم a lot of."
        },
        {
            question: "26. There was ________ space for all the people who came.",
            questionAr: "٢٦. كان هناك مساحة ________ لجميع الأشخاص الذين أتوا.",
            options: ["very little", "very few", "many", "a few"],
            optionsAr: ["very little (قليلة جداً - لغير المعدود)", "very few (للمعدود)", "many", "a few"],
            correct: 0,
            hint: "'Space' is uncountable -> 'very little'.",
            hintAr: "كلمة Space (مساحة) غير معدودة -> نستخدم very little."
        },
        {
            question: "27. \"Have you got any coins for the vending machine?\" - \"Yes, I have ________.\"",
            questionAr: "٢٧. \"هل لديك أي عملات معدنية لماكينة البيع؟\" - \"نعم، لدي ________.\"",
            options: ["a few", "a little", "few", "a bit"],
            optionsAr: ["a few (عدد قليل يكفي)", "a little", "few", "a bit"],
            correct: 0,
            hint: "Coins is countable. Saying 'Yes' implies you have a positive small amount -> 'a few'.",
            hintAr: "العملات معدودة، والإجابة بـ نعم تدل على وجود كمية كافية -> a few."
        },
        {
            question: "28. There's ________ of sun cream in the bottle.",
            questionAr: "٢٨. يوجد ________ كريم شمس في الزجاجة.",
            options: ["a bit", "a little", "a few", "many"],
            optionsAr: ["a bit (يتبعها of)", "a little", "a few", "many"],
            correct: 0,
            hint: "We say 'a bit OF' something uncountable.",
            hintAr: "نقول a bit of sun cream لوجود حرف الجر of."
        },

        // --- 4. Past Simple vs. Present Perfect (PDF Page 7 - All 12 Questions) ---
        {
            question: "29. I ________ to Vienna.",
            questionAr: "٢٩. أنا لم ________ إلى فيينا من قبل.",
            options: ["'ve never been", "never went", "never was", "never been"],
            optionsAr: ["'ve never been (مضارع تام - تجربة حياتية)", "never went", "never was", "never been"],
            correct: 0,
            hint: "Life experience up to now without specific time -> Present Perfect ('ve never been).",
            hintAr: "الحديث عن تجربة حياتية حتى اللحظة بدون وقت محدد -> مضارع تام."
        },
        {
            question: "30. My great great grandfather ________ five sisters.",
            questionAr: "٣٠. كان لجد جدي الأكبر ________ خمس أخوات.",
            options: ["had", "has had", "has", "have"],
            optionsAr: ["had (ماضي بسيط)", "has had", "has", "have"],
            correct: 0,
            hint: "The great-grandfather is dead (finished life period) -> Past Simple (had).",
            hintAr: "فترة حياة الجد انتهت تماماً في الماضي -> ماضي بسيط had."
        },
        {
            question: "31. He ________ in Manila for a year when he was a student.",
            questionAr: "٣١. هو ________ في مانيلا لمدة عام عندما كان طالباً.",
            options: ["lived", "has lived", "lives", "is living"],
            optionsAr: ["lived (ماضي بسيط)", "has lived", "lives", "is living"],
            correct: 0,
            hint: "'When he was a student' is a finished past time -> Past Simple.",
            hintAr: "فترة كونه طالباً انتهت في الماضي -> ماضي بسيط lived."
        },
        {
            question: "32. Oh no! I ________ my wallet!",
            questionAr: "٣٢. يا إلهي! لقد ________ محفظتي!",
            options: ["'ve lost", "lost", "lose", "have lose"],
            optionsAr: ["'ve lost (مضارع تام - أثره حاضر الآن)", "lost", "lose", "have lose"],
            correct: 0,
            hint: "A recent event with a direct present result (I don't have it now) -> Present Perfect.",
            hintAr: "حدث وقع وله نتيجة حاضرة الآن (المحفظة مفقودة حالياً) -> مضارع تام."
        },
        {
            question: "33. ________ Julie today?",
            questionAr: "٣٣. هل ________ جولي اليوم؟",
            options: ["Have you seen", "Did you see", "Do you see", "Are you seeing"],
            optionsAr: ["Have you seen (مضارع تام)", "Did you see", "Do you see", "Are you seeing"],
            correct: 0,
            hint: "'Today' is an unfinished period of time -> Present Perfect.",
            hintAr: "كلمة today تدل على فترة زمنية لم تنته بعد -> مضارع تام."
        },
        {
            question: "34. At the weekend, they ________ football, then they ________ to a restaurant.",
            questionAr: "٣٤. في عطلة نهاية الأسبوع، ________ كرة القدم، ثم ________ إلى المطعم.",
            options: ["played / went", "have played / gone", "played / have gone", "play / go"],
            optionsAr: ["played / went (ماضي بسيط لأحداث متتالية)", "have played / gone", "played / have gone", "play / go"],
            correct: 0,
            hint: "Consecutive finished past actions at a specific time (the weekend) -> Past Simple.",
            hintAr: "أحداث متتالية وقعت وانتهت في الماضي -> ماضي بسيط."
        },
        {
            question: "35. I ________ six books this week.",
            questionAr: "٣٥. لقد ________ ستة كتب هذا الأسبوع.",
            options: ["'ve read", "read (past)", "am reading", "reads"],
            optionsAr: ["'ve read (مضارع تام)", "read", "am reading", "reads"],
            correct: 0,
            hint: "'This week' is an unfinished period of time -> Present Perfect.",
            hintAr: "الأسبوع الحالي لم ينتهِ بعد -> مضارع تام ('ve read)."
        },
        {
            question: "36. Amy ________ in Portugal when she was young.",
            questionAr: "٣٦. إيمي ________ في البرتغال عندما كانت صغيرة.",
            options: ["lived", "has lived", "'s living", "lives"],
            optionsAr: ["lived (ماضي بسيط)", "has lived", "'s living", "lives"],
            correct: 0,
            hint: "'When she was young' specifies a past, finished period -> Past Simple.",
            hintAr: "فترة الطفولة انتهت في الماضي -> ماضي بسيط lived."
        },
        {
            question: "37. She ________ her grandmother last month.",
            questionAr: "٣٧. هي ________ جدتها الشهر الماضي.",
            options: ["visited", "has visited", "visits", "is visiting"],
            optionsAr: ["visited (ماضي بسيط)", "has visited", "visits", "is visiting"],
            correct: 0,
            hint: "'Last month' is a specific finished past time -> Past Simple.",
            hintAr: "الشهر الماضي وقت محدد ومنتهٍ -> ماضي بسيط visited."
        },
        {
            question: "38. The Vandals ________ Rome in the year 455.",
            questionAr: "٣٨. قبائل الوندال ________ روما في عام 455.",
            options: ["invaded", "have invaded", "invade", "were invading"],
            optionsAr: ["invaded (ماضي بسيط)", "have invaded", "invade", "were invading"],
            correct: 0,
            hint: "'In the year 455' is a specific historical date -> Past Simple.",
            hintAr: "تاريخ تاريخي محدد في الماضي -> ماضي بسيط invaded."
        },
        {
            question: "39. She ________ in seven different countries, so she knows a lot about different cultures.",
            questionAr: "٣٩. لقد ________ في سبع دول مختلفة، لذلك هي تعرف الكثير عن الثقافات.",
            options: ["'s lived", "lived", "lives", "living"],
            optionsAr: ["'s lived (مضارع تام)", "lived", "lives", "living"],
            correct: 0,
            hint: "Life experience with a result in the present (she knows now) -> Present Perfect.",
            hintAr: "خبرة حياتية مرتبطة بنتيجتها في الحاضر -> مضارع تام ('s lived)."
        },
        {
            question: "40. I ________ to the cinema last night.",
            questionAr: "٤٠. أنا ________ إلى السينما الليلة الماضية.",
            options: ["went", "have gone", "go", "was gone"],
            optionsAr: ["went (ماضي بسيط)", "have gone", "go", "was gone"],
            correct: 0,
            hint: "'Last night' indicates a finished past time -> Past Simple.",
            hintAr: "الليلة الماضية وقت ماضي منتهٍ -> ماضي بسيط went."
        },

        // --- 5. Present Simple vs. Past Simple (PDF Page 8 - All 15 Questions) ---
        {
            question: "41. She ________ to Australia in 1994 and she liked it very much.",
            questionAr: "٤١. هي ________ إلى أستراليا عام 1994 وقد أعجبها ذلك كثيراً.",
            options: ["went", "goes", "has gone", "is going"],
            optionsAr: ["went (ماضي بسيط)", "goes", "has gone", "is going"],
            correct: 0,
            hint: "'In 1994' -> Past Simple (went).",
            hintAr: "عام 1994 يدل على الماضي البسيط -> went."
        },
        {
            question: "42. My father usually ________ his steak well-done.",
            questionAr: "٤٢. والدي عادة ________ شريحة اللحم مطهوة جيداً.",
            options: ["likes", "liked", "is liking", "like"],
            optionsAr: ["likes (مضارع بسيط مع المفرد)", "liked", "is liking", "like"],
            correct: 0,
            hint: "'Usually' indicates a routine/habit in Present Simple -> likes.",
            hintAr: "كلمة usually تدل على عادة ومضارع بسيط، والفاعل مفرد -> likes."
        },
        {
            question: "43. The dog ________ its toy last night.",
            questionAr: "٤٣. الكلب ________ لعبته الليلة الماضية.",
            options: ["ate", "eats", "eat", "is eating"],
            optionsAr: ["ate (ماضي بسيط)", "eats", "eat", "is eating"],
            correct: 0,
            hint: "'Last night' -> Past Simple (ate).",
            hintAr: "الليلة الماضية -> ماضي بسيط ate."
        },
        {
            question: "44. The policeman ________ to the burglar yesterday.",
            questionAr: "٤٤. الشرطي ________ مع اللص أمس.",
            options: ["talked", "talks", "is talking", "talk"],
            optionsAr: ["talked (ماضي بسيط)", "talks", "is talking", "talk"],
            correct: 0,
            hint: "'Yesterday' -> Past Simple (talked).",
            hintAr: "أمس تدل على الماضي البسيط -> talked."
        },
        {
            question: "45. ________ a test last week?",
            questionAr: "٤٥. هل ________ اختباراً الأسبوع الماضي؟",
            options: ["Did you have", "Do you have", "Have you had", "Were you having"],
            optionsAr: ["Did you have (سؤال في الماضي البسيط)", "Do you have", "Have you had", "Were you having"],
            correct: 0,
            hint: "'Last week' question -> Did + subject + base verb (Did you have).",
            hintAr: "سؤال عن الأسبوع الماضي -> Did you have."
        },
        {
            question: "46. I often see her mother but she never ________ to me.",
            questionAr: "٤٦. أنا غالباً أرى والدتها ولكنها لا ________ معي أبداً.",
            options: ["speaks", "spoke", "is speaking", "speak"],
            optionsAr: ["speaks (مضارع بسيط)", "spoke", "is speaking", "speak"],
            correct: 0,
            hint: "'Never' expressing a present regular fact about 'she' -> speaks.",
            hintAr: "حقيقة وعادة متكررة في الحاضر مع الضمير she -> speaks."
        },
        {
            question: "47. The gentleman ________ to his servant 2 hours ago.",
            questionAr: "٤٧. السيد ________ إلى خادمه منذ ساعتين.",
            options: ["spoke", "speaks", "is speaking", "speak"],
            optionsAr: ["spoke (ماضي بسيط)", "speaks", "is speaking", "speak"],
            correct: 0,
            hint: "'2 hours ago' -> Past Simple (spoke).",
            hintAr: "منذ ساعتين (ago) -> ماضي بسيط spoke."
        },
        {
            question: "48. The kangaroo always ________ its baby.",
            questionAr: "٤٨. الكنغر دائماً ________ صغيره.",
            options: ["carries", "carried", "carry", "is carrying"],
            optionsAr: ["carries (مضارع بسيط)", "carried", "carry", "is carrying"],
            correct: 0,
            hint: "'Always' expressing a general fact about the singular kangaroo -> carries.",
            hintAr: "حقيقة عامة مع كلمة always والفاعل مفرد -> carries."
        },
        {
            question: "49. My friend ________ a lot every day.",
            questionAr: "٤٩. صديقي ________ كثيراً كل يوم.",
            options: ["talks", "talked", "talk", "is talking"],
            optionsAr: ["talks (مضارع بسيط)", "talked", "talk", "is talking"],
            correct: 0,
            hint: "'Every day' -> Present Simple with third-person singular -> talks.",
            hintAr: "عادة يومية every day مع المفرد -> talks."
        },
        {
            question: "50. The man ________ to the supermarket last weekend.",
            questionAr: "٥٠. الرجل ________ إلى السوبرماركت عطلة نهاية الأسبوع الماضية.",
            options: ["drove", "drives", "drive", "is driving"],
            optionsAr: ["drove (ماضي بسيط)", "drives", "drive", "is driving"],
            correct: 0,
            hint: "'Last weekend' -> Past Simple (drove).",
            hintAr: "عطلة نهاية الأسبوع الماضية -> ماضي بسيط drove."
        },
        {
            question: "51. My brothers ________ for England last week.",
            questionAr: "٥١. إخوتي ________ إلى إنجلترا الأسبوع الماضي.",
            options: ["left", "leave", "leaves", "are leaving"],
            optionsAr: ["left (ماضي بسيط)", "leave", "leaves", "are leaving"],
            correct: 0,
            hint: "'Last week' -> Past Simple (left).",
            hintAr: "الأسبوع الماضي -> ماضي بسيط left."
        },
        {
            question: "52. My sisters ________ for England every year in June.",
            questionAr: "٥٢. أخواتي ________ إلى إنجلترا كل عام في يونيو.",
            options: ["leave", "left", "leaves", "are leaving"],
            optionsAr: ["leave (مضارع بسيط للجمع)", "left", "leaves", "are leaving"],
            correct: 0,
            hint: "'Every year' with plural subject (sisters) -> Present Simple base form (leave).",
            hintAr: "عادة متكررة كل عام والفاعل جمع (sisters) -> leave."
        },
        {
            question: "53. I don't like that man because he often ________ at me.",
            questionAr: "٥٣. أنا لا أحب ذلك الرجل لأنه غالباً ما ________ مني.",
            options: ["laughs", "laughed", "laugh", "is laughing"],
            optionsAr: ["laughs (مضارع بسيط)", "laughed", "laugh", "is laughing"],
            correct: 0,
            hint: "'Often' with 'he' -> Present Simple (laughs).",
            hintAr: "عادة مع الضمير he -> نضع s للفعل (laughs)."
        },
        {
            question: "54. Her sister never ________.",
            questionAr: "٥٤. أختها لا ________ أبداً.",
            options: ["smokes", "smoked", "smoke", "is smoking"],
            optionsAr: ["smokes (مضارع بسيط)", "smoked", "smoke", "is smoking"],
            correct: 0,
            hint: "'Never' expressing a general fact about 'her sister' (singular) -> smokes.",
            hintAr: "حقيقة دائمة عن المفرد -> smokes."
        },
        {
            question: "55. The cat usually ________ its basket when it is hungry.",
            questionAr: "٥٥. القطة عادة ________ سلتها عندما تكون جائعة.",
            options: ["leaves", "left", "leave", "is leaving"],
            optionsAr: ["leaves (مضارع بسيط)", "left", "leave", "is leaving"],
            correct: 0,
            hint: "'Usually' with singular subject -> Present Simple (leaves).",
            hintAr: "عادة متكررة مع المفرد -> leaves."
        },

        // --- 6. Idioms (PDF Pages 9-12 - All 4 Idioms) ---
        {
            question: "56. That's right, I got it straight from the ________ mouth.",
            questionAr: "٥٦. هذا صحيح، لقد سمعت الخبر مباشرة من فم ________.",
            options: ["horse's", "cat's", "rat's", "dog's"],
            optionsAr: ["الحصان (المصدر المباشر)", "القط", "الفأر", "الكلب"],
            correct: 0,
            hint: "The idiom meaning 'from a reliable direct source' is 'straight from the horse's mouth'.",
            hintAr: "المصطلح الإنجليزي للمصدر المباشر هو straight from the horse's mouth."
        },
        {
            question: "57. The security guard heard some noise after closing hours; it seemed to him that there is something ________ going on.",
            questionAr: "٥٧. سمع حارس الأمن صوتاً بعد ساعات الإغلاق؛ بدا له أن هناك شيئاً ________ يحدث.",
            options: ["fishy", "horsey", "ratty", "catty"],
            optionsAr: ["fishy (مريباً / مشبوهاً)", "horsey", "ratty", "catty"],
            correct: 0,
            hint: "'Fishy' means strange and suspicious.",
            hintAr: "المصطلح الذي يعني غريباً ومريباً هو fishy."
        },
        {
            question: "58. How come the front door is open? I'm sure I closed it before I go. Honestly, I smell a ________.",
            questionAr: "٥٨. كيف يكون الباب الأمامي مفتوحاً؟ أنا متأكد أنني أغلقته قبل أن أذهب. بصراحة، أنا أشم رائحة ________.",
            options: ["rat", "fish", "horse", "cat"],
            optionsAr: ["فأر (أشعر بوجود خطب ما)", "سمكة", "حصان", "قطة"],
            correct: 0,
            hint: "'Smell a rat' means to suspect something is wrong or deceitful.",
            hintAr: "المصطلح الذي يعني الشعور بوجود خديعة أو شيء مريب هو smell a rat."
        },
        {
            question: "59. Tell us about your party. What's the matter? ________ got your tongue?",
            questionAr: "٥٩. أخبرنا عن حفلتك. ما بك؟ هل القطة ________ لسانك؟",
            options: ["Cat", "Dog", "Horse", "Fish"],
            optionsAr: ["القطة (عاجز عن الكلام)", "الكلب", "الحصان", "السمكة"],
            correct: 0,
            hint: "'Cat got your tongue?' is used when someone is unusually quiet and cannot speak.",
            hintAr: "يقال للشخص الذي يعجز فجأة عن الرد والكلام: Cat got your tongue?"
        }
    ]
});