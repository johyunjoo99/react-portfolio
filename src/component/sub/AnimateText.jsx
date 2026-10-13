// 글자 단위로 분리해 순차 등장 애니메이션 적용
// 스크린리더에는 분리된 글자 대신 전체 텍스트를 한 번에 읽도록 처리
const AnimateText = ({ children }) => {
  const text = String(children);

  return (
    <>
        <span className="blind">{text}</span>
        {
            Array.from(text).map((char, index) => (
                <span className="char" key={index} style={{ "--idx" : index }} aria-hidden="true">
                    {char === " " ? " " : char}
                </span>
            ))
        }
    </>
  )
}

export default AnimateText
