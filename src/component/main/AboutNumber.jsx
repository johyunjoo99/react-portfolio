import React from 'react'

const AboutNumber = ({ number }) => {
  let digitOrder = 0;

  return (
    <>
        <div className="number" data-aos="fade-in">
            <strong>{number}</strong>
            <div className="rolling" aria-hidden="true">
                {
                    [...number].map((char, index) => {
                        if (!/\d/.test(char)) {
                            return <span key={index}>{char}</span>;
                        }
                        
                        const isOdd = digitOrder % 2 === 0;
                        digitOrder++;

                        const rollingNum = isOdd 
                        ? [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
                        : [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

                        // 숫자라면 롤링용 구조 생성
                        return (
                            <div className={isOdd ? "odd" : "even"} key={index}>
                                {!isOdd && <span>{char}</span>}
                                {
                                    rollingNum.map((num) => {
                                        return <span key={num}>{num}</span>
                                    })
                                }
                                {isOdd && <span>{char}</span>}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </>
  )
}

export default AboutNumber