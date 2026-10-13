const isDigit = (char) => /\d/.test(char);

const AboutNumber = ({ number }) => {
  const chars = [...number];

  return (
    <div className="number" data-aos="fade-in" data-aos-once="false">
        <strong>{number}</strong>
        <div className="rolling" aria-hidden="true">
            {
                chars.map((char, index) => {
                    if (!isDigit(char)) {
                        return <span key={index}>{char}</span>;
                    }

                    // 숫자 자리 순서(1, 2, 3...)에 따라 롤링 방향을 번갈아 적용
                    const digitOrder = chars.slice(0, index).filter(isDigit).length + 1;
                    const isOdd = digitOrder % 2 === 1;

                    const rollingNum = isOdd
                    ? [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
                    : [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

                    return (
                        <div className={isOdd ? "odd" : "even"} key={index}>
                            {!isOdd && <span>{char}</span>}
                            {
                                rollingNum.map((num) => (
                                    <span key={num}>{num}</span>
                                ))
                            }
                            {isOdd && <span>{char}</span>}
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default AboutNumber
