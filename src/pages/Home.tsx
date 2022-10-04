import { useNavigate } from 'react-router-dom'

import { IconButton, onClickProps } from "../components/IconButton"
import IconRock from '../assets/icon-rock.svg'
import IconPaper from '../assets/icon-paper.svg'
import IconScissor from '../assets/icon-scissors.svg'



export function Home() {
    const navigate = useNavigate();

    function handleSelectOption({ borderColor, iconImg, nameOption }: onClickProps) {
        return navigate('/picked', {
            state: {
                borderColor,
                iconImg,
                nameOption
            }
        })
    }

    return (
        <div className=" w-[259px] h-[231px] md:w-[370px] md:h-[330px] bg-no-repeat bg-image-triangle bg-cover relative mt-14">
            <IconButton
                nameOption='paper'
                style={"absolute top-0 left-0 -translate-x-10 -translate-y-14"}
                iconImg={IconPaper}
                borderColor='bg-paper-gradient'
                onClick={handleSelectOption}
            />
            <IconButton
                nameOption='scissors'
                style={"absolute top-0 right-0 translate-x-10 -translate-y-14"}
                iconImg={IconScissor}
                borderColor='bg-scissors-gradient'
                onClick={handleSelectOption}
            />
            <IconButton
                nameOption='rock'
                style={"absolute bottom-0 left-0 right-0 mx-[68px] md:mx-[98px] translate-y-10"}
                iconImg={IconRock}
                borderColor='bg-rock-gradient'
                onClick={handleSelectOption}
            />
        </div>
    );
}