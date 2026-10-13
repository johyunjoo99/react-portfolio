import projectData from './projectData'

// description의 줄바꿈(\n)은 CSS white-space: pre-line으로 처리
const subLnb = {
    home: {
        link: "/",
        title: "Home",
        num: 1,
    },
    about: {
        link: "/about",
        title: "About",
        num: 2,
    },
    work: {
        num: 3,
        link: "/work",
        title: "Work",
        description: `웹 에이전시에서 직접 참여한 ${projectData.length}개의 프로젝트입니다.\n모든 프로젝트는 KOSA 경력관리시스템에 등록된 경력입니다.`,
    },
    contact: {
        num: 4,
        link: "/contact",
        title: "Contact",
    }
}

export default subLnb