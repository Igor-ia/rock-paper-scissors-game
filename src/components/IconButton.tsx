import { Oval } from 'react-loader-spinner'

export interface onClickProps {
    borderColor: string;
    iconImg: string;
    nameOption: string;
}

interface Props {
    style: string;
    styleButton?: string;
    iconImg: string;
    borderColor: string;
    nameOption: string;
    onClick?: ({ borderColor, iconImg, nameOption }: onClickProps) => void;
}

export function IconButton({ nameOption, style, styleButton, iconImg, borderColor, onClick }: Props) {
    return (
        <div className={`p-5 rounded-full ${borderColor} overflow-hidden ${style}`}>
            <button className={`p-6 md:p-11 rounded-full bg-white flex items-center justify-center ${styleButton}`} onClick={() => onClick?.({ borderColor, iconImg, nameOption })}>
                {iconImg ? (
                    <img src={iconImg} className="w-8 h-[36px] md:w-12 md:h-[52px]" alt="" />
                ) : (

                    <div className="w-12 h-[52px] flex items-center justify-center">
                        <Oval
                            height={25}
                            width={25}
                            color='#fff'
                        />
                    </div>
                )}
            </button>
        </div>
    )
}