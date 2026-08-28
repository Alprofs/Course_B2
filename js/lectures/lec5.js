DataStore.lectures.push({
    id: 5,
    title: "Quantifiers & Nouns Meanings",
    isPlaceholder: false,

    // =========================================================================
    // 1. REVISION SECTION (ENGLISH) - Comprehensive Grammar & Vocab
    // =========================================================================
    revision: [
        // --- Intro to Nouns ---
        { type: 'title', content: 'Part 1: Countable vs. Non-countable Nouns' },
        { type: 'text', content: 'Quantifiers are pre-modifiers which indicate <b>how much</b> or <b>how many</b> there is of something. Using quantifiers requires a clear distinction between countable and non-countable nouns.' },
        { 
            type: 'table', 
            headers: ['Countable Nouns (C)', 'Non-countable Nouns (U)'], 
            rows: [
                ['Can be modified by a number (1 apple, 2 apples).', 'Cannot be counted directly with numbers (1 water ❌).'],
                ['Have both a singular and a plural form (book / books).', 'Have neither singular nor plural. Always take singular verbs.'],
                ['Examples: book, child, orange, house, bottle.', 'Examples: water, money, sand, hair, information, sugar, sleep.']
            ] 
        },

        // --- Much vs Many ---
        { type: 'title', content: 'Part 2: Much vs. Many' },
        { type: 'rule', title: 'Rule: Much vs. Many', content: '<b>Many:</b> Used with plural COUNTABLE nouns (e.g., <i>many houses, many friends</i>).<br><b>Much:</b> Used with NON-COUNTABLE nouns (e.g., <i>much money, much profit</i>).' },
        { type: 'mistake', content: '<b>Common Error:</b> Never use "Many" with "money"! Money is uncountable.<br>❌ <i>Wrong:</i> I don\'t have many money.<br>✔ <i>Right:</i> I don\'t have <b>much</b> money.' },

        // --- A little/Little vs A few/Few ---
        { type: 'title', content: 'Part 3: A Little / Little vs. A Few / Few' },
        { type: 'text', content: 'Both sets mean a small amount. The presence of the article <b>"a"</b> gives a positive meaning (enough), while its absence gives a negative meaning (not enough/almost none).' },
        { 
            type: 'table', 
            headers: ['Quantifier', 'Noun Type', 'Meaning & Context', 'Example'], 
            rows: [
                ['<b>A few</b>', 'Countable', 'Positive: Some, enough', 'The museum has <b>a few visitors</b> and remains profitable.'],
                ['<b>Few</b>', 'Countable', 'Negative: Very few, not enough', 'The island attracted <b>few visitors</b> until the airport was built.'],
                ['<b>A little</b>', 'Uncountable', 'Positive: Some, enough', 'The prisoners were given <b>a little food</b> to stay healthy.'],
                ['<b>Little</b>', 'Uncountable', 'Negative: Very little, not enough', 'The settlers had <b>little food</b> and were starving.']
            ] 
        },

        // --- Some vs Any ---
        { type: 'title', content: 'Part 4: Some vs. Any' },
        { type: 'rule', title: 'Rule: Some vs. Any', content: '<b>Some:</b> Used in positive (affirmative) sentences.<br><b>Any:</b> Used in negative sentences and in most questions.' },
        { type: 'note', content: '<b>Special Exception:</b> We use <b>SOME</b> in questions when offering something or making a polite request.<br>• <i>Offer:</i> Would you like <b>some</b> ketchup with your fries?<br>• <i>Request:</i> Can I have <b>some</b> water, please?' },

        // --- Vocabulary: Different Meanings ---
        { type: 'title', content: 'Part 5: Countable & Uncountable Nouns with Different Meanings' },
        { type: 'text', content: 'When used <b>uncountably</b>, nouns usually refer to substances, materials, or general ideas. When used <b>countably</b>, they refer to specific individual items, documents, or instances.' },
        {
            type: 'table',
            headers: ['Word', 'Uncountable Meaning (Substance / Idea)', 'Countable Meaning (Specific Item)'],
            rows: [
                ['<b>Glass</b>', 'Broken material: <i>There is broken glass on the road.</i>', 'Drinking container / Eyeglasses: <i>A glass of water / My glasses.</i>'],
                ['<b>Cloth</b>', 'Fabric / material: <i>She bought five meters of cloth.</i>', 'A piece for cleaning: <i>I need a cloth to wipe the table.</i>'],
                ['<b>Fish</b>', 'Food / meat: <i>We had fish for dinner.</i>', 'The living creature: <i>He caught a big fish in the lake.</i>'],
                ['<b>Work</b>', 'Labor / effort: <i>I have a lot of work today.</i>', 'Art / literature creation: <i>Hamlet is a famous work by Shakespeare.</i>'],
                ['<b>Paper</b>', 'Writing material: <i>I need some paper to write on.</i>', 'A newspaper: <i>Did you buy a paper this morning?</i>'],
                ['<b>Hair</b>', 'All hair on head: <i>He hasn\'t got much hair.</i>', 'A single strand: <i>There is a hair in my sandwich!</i>'],
                ['<b>Drink</b>', 'Alcohol in general: <i>Drink was the cause of his problems.</i>', 'A specific beverage: <i>Can I get you a drink?</i>'],
                ['<b>People</b>', 'Individuals (plural of person): <i>I love meeting people.</i>', 'A nation or ethnic group: <i>The different peoples of Asia.</i>'],
                ['<b>Home</b>', 'The abstract concept of home: <i>Home is where the heart is.</i>', 'An institution / care home: <i>Her grandmother lives in a home.</i>'],
                ['<b>Policy</b>', 'A principle / strategy: <i>Honesty is the best policy.</i>', 'An official insurance document: <i>I lost my car insurance policy.</i>'],
                ['<b>Trade</b>', 'International commerce: <i>Trade with China has increased.</i>', 'A skilled craft/job: <i>Carpentry is a useful trade.</i>']
            ]
        },

        // --- Food Items with Different Shades of Meaning ---
        { type: 'title', content: 'Part 6: Food Items with Countable & Uncountable Uses' },
        {
            type: 'table',
            headers: ['Food Item', 'Uncountable (General / Substance)', 'Countable (Portion / Whole item)'],
            rows: [
                ['<b>Coffee / Tea</b>', 'The general liquid: <i>I like coffee.</i>', 'A cup/serving: <i>A coffee and two teas, please!</i>'],
                ['<b>Potato</b>', 'Mashed/cooked substance: <i>A scoop of potato.</i>', 'The whole individual vegetable: <i>Just two potatoes, please!</i>'],
                ['<b>Chocolate</b>', 'The sweet substance/mass: <i>Would you like some chocolate?</i>', 'An individual chocolate piece/candy: <i>Would you like a chocolate?</i>'],
                ['<b>Pepper</b>', 'Ground spice / seasoning: <i>Add salt and pepper.</i>', 'The whole vegetable: <i>A red pepper / a green pepper.</i>'],
                ['<b>Onion</b>', 'Chopped condiment: <i>A hot dog with onion.</i>', 'The whole round vegetable: <i>Chop an onion for the sauce.</i>']
            ]
        }
    ],

    // =========================================================================
    // 2. REVISION SECTION (ARABIC TRANSLATION)
    // =========================================================================
    revisionAr: [
        // --- Intro to Nouns ---
        { type: 'title', content: 'الجزء الأول: الأسماء المعدودة وغير المعدودة' },
        { type: 'text', content: 'محددات الكمية (Quantifiers) هي كلمات تسبق الأسماء لتدل على <b>الكمية</b> أو <b>العدد</b>. ولاستخدامها بشكل صحيح يجب التمييز بدقة بين الأسماء المعدودة وغير المعدودة.' },
        { 
            type: 'table', 
            headers: ['الأسماء المعدودة (Countable)', 'الأسماء غير المعدودة (Non-countable)'], 
            rows: [
                ['يمكن عدها بالأرقام مباشرة (تفاحة، تفاحتان).', 'لا يمكن عدها برقم مباشر (لا يصح قول: 1 ماء ❌).'],
                ['لها صيغة مفرد وصيغة جمع (كتاب / كتب).', 'ليس لها صيغة جمع أبداً، وتُعامل دائماً معاملة المفرد.'],
                ['أمثلة: book, child, orange, house, bottle.', 'أمثلة: water, money, sand, hair, sugar, sleep.']
            ] 
        },

        // --- Much vs Many ---
        { type: 'title', content: 'الجزء الثاني: الفرق بين Much و Many' },
        { type: 'rule', title: 'قاعدة Much و Many', content: '<b>Many (كثير للعدد):</b> تأتي مع الأسماء المعدودة الجمع (مثل: <i>many houses, many friends</i>).<br><b>Much (كثير للكمية):</b> تأتي مع الأسماء غير المعدودة (مثل: <i>much money, much profit</i>).' },
        { type: 'mistake', content: '<b>خطأ شائع جداً:</b> إياك واستخدام Many مع كلمة المال (Money)! كلمة Money اسم غير معدود.<br>❌ <i>خطأ:</i> I don\'t have many money.<br>✔ <i>صواب:</i> I don\'t have <b>much</b> money.' },

        // --- A little/Little vs A few/Few ---
        { type: 'title', content: 'الجزء الثالث: القليل (للمعدود وغير المعدود)' },
        { type: 'text', content: 'كل هذه الكلمات تعني "قليل"، ولكن وجود أداة التنكير <b>"a"</b> يعطي معنى إيجابياً (قليل ولكنه يكفي)، بينما غيابها يعطي معنى سلبياً (قليل جداً ولا يكفي / شبه منعدم).' },
        { 
            type: 'table', 
            headers: ['المحدد', 'النوع', 'المعنى والسياق', 'مثال من المحاضرة'], 
            rows: [
                ['<b>A few</b>', 'معدود', 'إيجابي: قليل ويكفي', 'The museum has <b>a few visitors</b> and remains profitable.'],
                ['<b>Few</b>', 'معدود', 'سلبي: قليل جداً ولا يكفي', 'The island attracted <b>few visitors</b> until the airport was built.'],
                ['<b>A little</b>', 'غير معدود', 'إيجابي: قليل ويكفي', 'The prisoners were given <b>a little food</b> to stay healthy.'],
                ['<b>Little</b>', 'غير معدود', 'سلبي: قليل جداً ومجاعة', 'The settlers had <b>little food</b> and were starving.']
            ] 
        },

        // --- Some vs Any ---
        { type: 'title', content: 'الجزء الرابع: الفرق بين Some و Any' },
        { type: 'rule', title: 'القاعدة العامة', content: '<b>Some (بعض):</b> تُستخدم في الجمل الإيجابية (المثبتة).<br><b>Any (أي):</b> تُستخدم في الجمل المنفية وفي معظم الأسئلة.' },
        { type: 'note', content: '<b>استثناء هام جداً (مواضع امتحانات):</b> نستخدم <b>SOME</b> في صيغة السؤال إذا كان الغرض "عرضاً كرمياً" (Offer) أو "طلباً مؤدباً" (Request).<br>• <i>عرض:</i> Would you like <b>some</b> ketchup?<br>• <i>طلب:</i> Can I have <b>some</b> water, please?' },

        // --- Vocabulary: Different Meanings ---
        { type: 'title', content: 'الجزء الخامس: أسماء يتغير معناها بين المعدود وغير المعدود' },
        { type: 'text', content: 'عند استخدام الاسم كـ <b>غير معدود</b> فهو يعبر عن المادة الخام أو الفكرة العامة، بينما استخدامه كـ <b>معدود</b> يحدد شيئاً منفرداً أو وثيقة أو عملاً معيناً.' },
        {
            type: 'table',
            headers: ['الكلمة', 'المعنى كغير معدود (مادة خام / عام)', 'المعنى كمعدود (شيء محدد يمكن عده وجمعه)'],
            rows: [
                ['<b>Glass</b>', 'مادة الزجاج (زجاج مكسور على الأرض)', 'كوب شرب زجاجي / نظارات طبية (glasses)'],
                ['<b>Cloth</b>', 'قماش (مادة خام للملابس)', 'قطعة قماش مخصصة للتنظيف والمسح (a cloth)'],
                ['<b>Fish</b>', 'لحم السمك كوجبة طعام (أكلنا سمك)', 'سمكة حية ككائن بحري (اصطاد سمكة)'],
                ['<b>Work</b>', 'العمل والجهد بصفة عامة', 'عمل أدبي أو فني أو مسرحي (أعمال شكسبير)'],
                ['<b>Paper</b>', 'الورق كمادة للكتابة والطباعة', 'جريدة أو صحيفة مطبوعة (a paper)'],
                ['<b>Hair</b>', 'شعر الرأس بالكامل', 'شعرة واحدة مفردة (شعرة في الحساء)'],
                ['<b>Drink</b>', 'المشروبات الكحولية والمسكرات', 'كوب مشروب محدد (عصير/شاي/قهوة)'],
                ['<b>People</b>', 'الناس والأشخاص (جمع Person)', 'شعب أو أمة أو عرق (شعوب آسيا)'],
                ['<b>Home</b>', 'البيت والوطن كمفهوم معنوي', 'دار رعاية / مؤسسة لإيواء المسنين'],
                ['<b>Policy</b>', 'النهج والسياسة العامة', 'وثيقة ومستند تأمين ورقي (وثيقة تأمين السيارة)'],
                ['<b>Trade</b>', 'حركة التجارة والاستيراد والتصدير', 'حرفة يدوية أو مهنة معينة (كالنجارة)']
            ]
        },

        // --- Food Items with Different Shades of Meaning ---
        { type: 'title', content: 'الجزء السادس: أطعمة يختلف معناها حسب العد' },
        {
            type: 'table',
            headers: ['اسم الطعام', 'كغير معدود (طعام عام / مادة)', 'كمعدود (حبة كاملة / وحدة تقديم)'],
            rows: [
                ['<b>Coffee / Tea</b>', 'مشروب الشاي أو القهوة عامة', 'فنجان أو كوب قهوة (two teas, a coffee)'],
                ['<b>Potato</b>', 'بطاطس مهروسة/مطبوخة في طبق', 'حبة بطاطس كاملة (two potatoes)'],
                ['<b>Chocolate</b>', 'مادة الشوكولاتة كحلوى عامة', 'قطعة شوكولاتة واحدة مأخوذة من العلبة'],
                ['<b>Pepper</b>', 'مسحوق الفلفل الأسود (التوابل)', 'قرن أو ثمرة فلفل خضراء/حمراء كاملة'],
                ['<b>Onion</b>', 'بصل مقطع ومضاف للطعام', 'حبة بصل كاملة (an onion)']
            ]
        }
    ],

    // =========================================================================
    // 3. QUIZ SECTION (30 Comprehensive Questions)
    // =========================================================================
    quiz: [
        // --- Much vs Many (PDF Page 5 - Complete Exercise) ---
        {
            question: "1. We saw _______ animals at the zoo.",
            questionAr: "١. رأينا _______ حيوانات في حديقة الحيوان.",
            options: ["much", "many", "little", "any"],
            optionsAr: ["much", "many", "little", "any"],
            correct: 1,
            hint: "'Animals' is a countable plural noun, so we use 'many'.",
            hintAr: "كلمة Animals جمع معدود، لذا نستخدم many."
        },
        {
            question: "2. How _______ oranges did you put in the box?",
            questionAr: "٢. كم _______ برتقالة وضعت في الصندوق؟",
            options: ["much", "many", "some", "little"],
            optionsAr: ["much", "many", "some", "little"],
            correct: 1,
            hint: "'Oranges' can be counted individually (1, 2, 3 oranges).",
            hintAr: "البرتقال يمكن عده، لذا نستخدم many."
        },
        {
            question: "3. There isn't _______ sugar in my coffee.",
            questionAr: "٣. لا يوجد _______ سكر في قهوتي.",
            options: ["many", "few", "much", "some"],
            optionsAr: ["many", "few", "much", "some"],
            correct: 2,
            hint: "'Sugar' is an uncountable substance.",
            hintAr: "السكر مادة غير معدودة، لذا نستخدم much."
        },
        {
            question: "4. I don't have _______ friends.",
            questionAr: "٤. أنا لا أملك _______ أصدقاء.",
            options: ["much", "many", "some", "a little"],
            optionsAr: ["much", "many", "some", "a little"],
            correct: 1,
            hint: "'Friends' is countable plural.",
            hintAr: "كلمة أصدقاء جمع معدود، لذا نستخدم many."
        },
        {
            question: "5. The old man hasn't got _______ hair on his head.",
            questionAr: "٥. الرجل العجوز لا يملك _______ شعر على رأسه.",
            options: ["many", "much", "a few", "some"],
            optionsAr: ["many", "much", "a few", "some"],
            correct: 1,
            hint: "Hair on the head in general is uncountable.",
            hintAr: "شعر الرأس بصفة عامة غير معدود، لذا نستخدم much."
        },
        {
            question: "6. I've packed _______ bottles of water.",
            questionAr: "٦. لقد حزمت _______ زجاجات من الماء.",
            options: ["much", "many", "little", "any"],
            optionsAr: ["much", "many", "little", "any"],
            correct: 1,
            hint: "While 'water' is uncountable, 'bottles' are countable plural!",
            hintAr: "الماء غير معدود، لكن 'الزجاجات' اسم جمع معدود، لذا نستخدم many."
        },
        {
            question: "7. I didn't get _______ sleep last night.",
            questionAr: "٧. لم أحصل على _______ نوم الليلة الماضية.",
            options: ["many", "a few", "much", "few"],
            optionsAr: ["many", "a few", "much", "few"],
            correct: 2,
            hint: "Sleep is an uncountable abstract noun.",
            hintAr: "النوم اسم غير معدود، لذا نستخدم much."
        },
        {
            question: "8. How _______ fruit do you eat in an average day?",
            questionAr: "٨. كم كمية الفاكهة التي تتناولها في اليوم العادي؟",
            options: ["much", "many", "few", "some"],
            optionsAr: ["much", "many", "few", "some"],
            correct: 0,
            hint: "The word 'fruit' (as a general food category) is uncountable.",
            hintAr: "كلمة فاكهة (كفئة طعام عامة) غير معدودة، لذا نستخدم much."
        },

        // --- Some vs Any (PDF Page 7 - Complete Exercise) ---
        {
            question: "9. Is there _______ milk left?",
            questionAr: "٩. هل يتبقى _______ حليب؟",
            options: ["some", "any", "many", "a few"],
            optionsAr: ["some", "any", "many", "a few"],
            correct: 1,
            hint: "Standard question format requires 'any'.",
            hintAr: "صيغة السؤال العادية تتطلب any."
        },
        {
            question: "10. There is _______ juice in the bottle.",
            questionAr: "١٠. يوجد _______ عصير في الزجاجة.",
            options: ["any", "many", "some", "few"],
            optionsAr: ["any", "many", "some", "few"],
            correct: 2,
            hint: "Positive (affirmative) statement requires 'some'.",
            hintAr: "جملة مثبتة، لذا نستخدم some."
        },
        {
            question: "11. Do you have _______ coffee?",
            questionAr: "١١. هل تملك _______ قهوة؟",
            options: ["any", "some", "few", "many"],
            optionsAr: ["any", "some", "few", "many"],
            correct: 0,
            hint: "Standard question asking about availability -> 'any'.",
            hintAr: "سؤال عادي عن توافر الشيء -> any."
        },
        {
            question: "12. I don't have _______ money left.",
            questionAr: "١٢. لم يتبق لدي _______ مال.",
            options: ["some", "any", "many", "a few"],
            optionsAr: ["some", "any", "many", "a few"],
            correct: 1,
            hint: "Negative sentence with 'don't' requires 'any'.",
            hintAr: "جملة منفية بـ don't تتطلب any."
        },
        {
            question: "13. She has _______ money.",
            questionAr: "١٣. هي تملك _______ مال.",
            options: ["any", "some", "few", "many"],
            optionsAr: ["any", "some", "few", "many"],
            correct: 1,
            hint: "Positive affirmative statement requires 'some'.",
            hintAr: "جملة مثبتة تتطلب some."
        },
        {
            question: "14. Do you know _______ of these singers?",
            questionAr: "١٤. هل تعرف _______ من هؤلاء المغنين؟",
            options: ["some", "any", "much", "little"],
            optionsAr: ["some", "any", "much", "little"],
            correct: 1,
            hint: "Standard question -> 'any'.",
            hintAr: "صيغة سؤال عادية نستخدم فيها any."
        },
        {
            question: "15. I don't know _______ of them.",
            questionAr: "١٥. أنا لا أعرف _______ منهم.",
            options: ["some", "any", "much", "many"],
            optionsAr: ["some", "any", "much", "many"],
            correct: 1,
            hint: "Negative statement -> 'any'.",
            hintAr: "جملة منفية -> any."
        },
        {
            question: "16. I know _______ of them.",
            questionAr: "١٦. أنا أعرف _______ منهم.",
            options: ["any", "some", "much", "little"],
            optionsAr: ["any", "some", "much", "little"],
            correct: 1,
            hint: "Positive affirmative sentence -> 'some'.",
            hintAr: "جملة مثبتة -> نستخدم some."
        },
        {
            question: "17. Would you like _______ ketchup with your fries?",
            questionAr: "١٧. هل تود _______ الكاتشب مع بطاطسك؟",
            options: ["any", "some", "many", "few"],
            optionsAr: ["any", "some", "many", "few"],
            correct: 1,
            hint: "Offer rule: Questions that make an offer use 'some'.",
            hintAr: "استثناء السؤال: أسئلة العرض والضيافة نستخدم معها some."
        },

        // --- A Little / Little vs A Few / Few (PDF Page 3) ---
        {
            question: "18. The prisoners were given _______ food in order to stay healthy.",
            questionAr: "١٨. تم إعطاء السجناء _______ من الطعام لكي يبقوا بصحة جيدة.",
            options: ["a little", "little", "a few", "few"],
            optionsAr: ["a little", "little", "a few", "few"],
            correct: 0,
            hint: "Food is uncountable. Context is positive (enough to stay healthy) -> 'a little'.",
            hintAr: "الطعام غير معدود. والسياق إيجابي (كفاهم ليعيشوا بصحة) -> a little."
        },
        {
            question: "19. The early settlers were unprepared and had _______ food to eat in the early months.",
            questionAr: "١٩. المستوطنون الأوائل لم يكونوا مستعدين وكان لديهم طعام _______ في الشهور الأولى (عانوا من نقص حاد).",
            options: ["a little", "little", "a few", "few"],
            optionsAr: ["a little", "little", "a few", "few"],
            correct: 1,
            hint: "Food is uncountable. Context is negative (not enough) -> 'little'.",
            hintAr: "الطعام غير معدود. والسياق سلبي (لم يكفهم) -> little."
        },
        {
            question: "20. The island attracted _______ visitors until the airport was built in 1999.",
            questionAr: "٢٠. جذبت الجزيرة زواراً _______ حتى تم بناء المطار عام 1999 (لم يزرها إلا القليل جداً).",
            options: ["a little", "little", "a few", "few"],
            optionsAr: ["a little", "little", "a few", "few"],
            correct: 3,
            hint: "Visitors is countable plural. Negative context (hardly any visitors) -> 'few'.",
            hintAr: "الزوار اسم معدود. والسياق سلبي (العدد قليل جداً قبل بناء المطار) -> few."
        },
        {
            question: "21. The museum has _______ visitors a month and remains profitable in the short-term.",
            questionAr: "٢١. المتحف يحصل على _______ زوار شهرياً ويبقى محققاً للأرباح.",
            options: ["a little", "little", "a few", "few"],
            optionsAr: ["a little", "little", "a few", "few"],
            correct: 2,
            hint: "Visitors is countable plural. Positive context (profitable) -> 'a few'.",
            hintAr: "الزوار اسم معدود. والسياق إيجابي بدليل استمرار الربح -> a few."
        },

        // --- Vocabulary: Different Meanings (PDF Pages 8 - 10) ---
        {
            question: "22. Be careful! There's broken _______ on the road.",
            questionAr: "٢٢. احذر! يوجد _______ مكسور على الطريق.",
            options: ["glass", "a glass", "glasses", "a piece of glasses"],
            optionsAr: ["glass", "a glass", "glasses", "a piece of glasses"],
            correct: 0,
            hint: "Referring to the substance/material (uncountable) -> 'glass'.",
            hintAr: "يقصد مادة الزجاج المكسور كخامة غير معدودة -> glass."
        },
        {
            question: "23. I need _______ to wipe the table.",
            questionAr: "٢٣. أحتاج إلى _______ لمسح الطاولة.",
            options: ["cloth", "a cloth", "clothes", "some cloths"],
            optionsAr: ["cloth", "a cloth", "clothes", "some cloths"],
            correct: 1,
            hint: "A piece of fabric used for cleaning is countable -> 'a cloth'.",
            hintAr: "قطعة القماش المخصصة للمسح والتنظيف معدودة وتأخذ أداة التنكير -> a cloth."
        },
        {
            question: "24. We had _______ for dinner yesterday.",
            questionAr: "٢٤. تناولنا _______ على العشاء بالأمس.",
            options: ["a fish", "fishes", "fish", "many fish"],
            optionsAr: ["a fish", "fishes", "fish", "many fish"],
            correct: 2,
            hint: "Fish as a food/meal is uncountable -> 'fish'.",
            hintAr: "السمك كطعام مطبوخ اسم غير معدود -> fish."
        },
        {
            question: "25. Hamlet is one of Shakespeare's most famous _______.",
            questionAr: "٢٥. مسرحية هاملت هي واحدة من أشهر _______ لشكسبير.",
            options: ["works", "work", "job", "working"],
            optionsAr: ["works", "work", "job", "working"],
            correct: 0,
            hint: "A literary or artistic creation is countable (works).",
            hintAr: "العمل الفني أو الأدبي اسم معدود ويُجمع (works)."
        },
        {
            question: "26. There's _______ in my sandwich, a dark one; it must be yours.",
            questionAr: "٢٦. يوجد _______ في شطيرتي، شعرة داكنة؛ لابد وأنها لك.",
            options: ["hair", "a hair", "hairs", "some hair"],
            optionsAr: ["hair", "a hair", "hairs", "some hair"],
            correct: 1,
            hint: "A single individual strand of hair is countable -> 'a hair'.",
            hintAr: "خصلة أو شعرة واحدة محددة تصبح اسماً معدوداً -> a hair."
        },
        {
            question: "27. Did you buy _______ this morning? I want to read the news.",
            questionAr: "٢٧. هل اشتريت _______ هذا الصباح؟ أريد قراءة الأخبار.",
            options: ["paper", "a paper", "papers", "some papers"],
            optionsAr: ["paper", "a paper", "papers", "some papers"],
            correct: 1,
            hint: "'A paper' means a newspaper (countable).",
            hintAr: "كلمة a paper تعني جريدة/صحيفة ورقية وهي معدودة."
        },
        {
            question: "28. The different _______ of Asia have rich cultural histories.",
            questionAr: "٢٨. تملك _______ آسيا المختلفة تاريخاً وثقافات عريقة.",
            options: ["person", "people", "peoples", "peoples'"],
            optionsAr: ["person", "people", "peoples", "peoples'"],
            correct: 2,
            hint: "When referring to distinct nations or ethnic races, 'peoples' is used.",
            hintAr: "عند الإشارة إلى الشعوب أو الأعراق المختلفة تُجمع كلمة people إلى peoples."
        },
        {
            question: "29. I lost my car insurance _______. I need to request a copy.",
            questionAr: "٢٩. لقد فقدت _______ تأمين سيارتي. أحتاج لطلب نسخة.",
            options: ["policy", "a policy", "police", "policing"],
            optionsAr: ["policy", "a policy", "police", "policing"],
            correct: 0,
            hint: "'Car insurance policy' is a countable noun phrase referring to the document.",
            hintAr: "وثيقة التأمين مستند معدود (insurance policy)."
        },
        {
            question: "30. Could I have _______ and two teas, please?",
            questionAr: "٣٠. هل يمكنني الحصول على _______ وفنجاني شاي من فضلك؟",
            options: ["coffee", "a coffee", "much coffee", "some coffees"],
            optionsAr: ["coffee", "a coffee", "much coffee", "some coffees"],
            correct: 1,
            hint: "When ordering in a café, drinks become countable units (a coffee = a cup of coffee).",
            hintAr: "عند طلب المشروبات في المقهى تُعامل كأكواب معدودة -> a coffee."
        }
    ]
});