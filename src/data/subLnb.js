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
        description: `모든 프로젝트는 KOSA 경력관리시스템에 등록된 경력이며,\n기재된 내용은 프로젝트 진행 당시를 기준으로 합니다.`,
    },
    contact: {
        num: 4,
        link: "/contact",
        title: "Contact",
    }
}

export default subLnb