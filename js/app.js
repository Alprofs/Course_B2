
const App = {
    init() {
        this.loadProgress();
        UI.init();
        UI.renderHome();
    },

    loadProgress() {
        const savedData = localStorage.getItem('englishB2AppProgress');
        if (savedData) {
            DataStore.userProgress = JSON.parse(savedData);
        } else {
            DataStore.userProgress = {
                completedLectures: []
            };
        }
    },

    saveProgress() {
        localStorage.setItem('englishB2AppProgress', JSON.stringify(DataStore.userProgress));
    },

    openLecture(id) {
        const lecture = DataStore.getLectureById(id);
        if (lecture && !lecture.isPlaceholder) {
            UI.renderLecture(lecture);
        }
    },

    completeLecture() {
        UI.hideAllOverlays();
        
        const currentLectureId = QuizController.lectureId;
        if (!DataStore.userProgress.completedLectures.includes(currentLectureId)) {
            DataStore.userProgress.completedLectures.push(currentLectureId);
            this.saveProgress();
        }

        document.getElementById('section-content').style.display = 'none';
        if(document.getElementById('lecture-menu')) {
            document.getElementById('lecture-menu').style.display = 'none';
        }
        UI.renderHome();
    }
};

document.addEventListener('DOMContentLoaded', () => {
    App.init();
});