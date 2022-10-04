import { IconButton } from "../components/IconButton";
import { useNavigate, useLocation } from 'react-router-dom';
import { useContext, useEffect, useState } from "react";

import IconRock from '../assets/icon-rock.svg'
import IconPaper from '../assets/icon-paper.svg'
import IconScissor from '../assets/icon-scissors.svg'
import { ScoreContext } from "../App";


interface HousePickedProps {
    borderColor: string;
    iconImg: string;
    nameOption: string;
}


export function Picked() {
    const { score, setScore } = useContext(ScoreContext);
    const navigate = useNavigate();
    const { state } = useLocation();
    const [housePicked, setHousePicked] = useState<HousePickedProps>({
        borderColor: '',
        iconImg: '',
        nameOption: ''
    });
    const [status, setStatus] = useState<string>('');

    useEffect(() => {
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 3);

            switch (randomNumber) {
                case 0:
                    //Paper Option
                    setHousePicked({ borderColor: 'bg-paper-gradient', iconImg: IconPaper, nameOption: 'paper' });
                    break;
                case 1:
                    //Rock Option
                    setHousePicked({ borderColor: 'bg-rock-gradient', iconImg: IconRock, nameOption: 'rock' });
                    break;
                case 2:
                    //Scissors Option
                    setHousePicked({ borderColor: 'bg-scissors-gradient', iconImg: IconScissor, nameOption: 'scissors' });
                    break;
            }


        }, 2000)


    }, [])

    useEffect(() => {
        switch (state.nameOption) {
            case 'paper':
                if (housePicked.nameOption === 'rock') {
                    setStatus('WIN');
                } else if (state.nameOption === housePicked.nameOption) {
                    setStatus('DRAW');
                } else if (housePicked.nameOption === 'scissors') {
                    setStatus('LOSE');
                }
                break;
            case 'rock':
                if (housePicked.nameOption === 'scissors') {
                    setStatus('WIN');
                } else if (state.nameOption === housePicked.nameOption) {
                    setStatus('DRAW');
                } else if (housePicked.nameOption === 'paper') {
                    setStatus('LOSE');
                }
                break;
            case 'scissors':
                if (housePicked.nameOption === 'paper') {
                    setStatus('WIN');
                } else if (state.nameOption === housePicked.nameOption) {
                    setStatus('DRAW');
                } else if (housePicked.nameOption === 'rock') {
                    setStatus('LOSE');
                }
                break;

        }

        switch (status) {
            case 'WIN':
                const yourOption = document.querySelector('#your-option');
                yourOption?.classList.remove('invisible');
                yourOption?.classList.add('-z-30');
                setScore(Number(score) + 1);
                break;
            case 'LOSE':
                const houseOption = document.querySelector('#house-option');
                houseOption?.classList.remove('invisible');
                houseOption?.classList.add('-z-30');
                break;

        }
    }, [housePicked, status])


    function handleClickPlayAgain() {
        return navigate('/');
    }

    return (
        <>
            <div className="flex w-full  md:gap-14 mt-6 items-center justify-center">
                <div className="min-w-[150px] min-h-[150px] md:min-w-[200px] md:min-h-[200px] relative flex flex-col gap-8 text-center">
                    <span className="hidden md:flex font-bold text-white">
                        YOU PICKED
                    </span>
                    <div id="your-option"
                        className="w-[250px] h-[250px] md:w-[500px] md:h-[500px] absolute invisible -translate-x-12 -translate-y-10 md:-translate-x-36 md:-translate-y-20 brightness-110 bg-radial-gradient rounded-full"
                    >
                        <div className="w-[200px] h-[200px] md:w-[400px] md:h-[400px]  translate-x-[11%] translate-y-[11%] md:translate-x-[12%] md:translate-y-[12%] brightness-110 bg-radial-gradient rounded-full">
                            <div className="w-[150px] h-[150px] md:w-[300px] md:h-[300px]  translate-x-[15%] translate-y-[15%] md:translate-x-[17%] md:translate-y-[16%] brightness-110 bg-radial-gradient rounded-full">
                                <IconButton
                                    nameOption={state.nameOption}
                                    iconImg={state.iconImg}
                                    style="visible w-[120px] h-[120px] md:w-[190px] md:h-[190px]  translate-x-[14%] translate-y-[14%] md:translate-x-[28%] md:translate-y-[28%]"
                                    styleButton="-translate-y-[3%] md:translate-x-[5%] md:translate-y-[3%]"
                                    borderColor={state.borderColor}
                                />
                            </div>
                        </div>
                    </div>

                    <span className="mt-[95%] text-center
                     md:hidden font-bold text-white">
                        YOU PICKED
                    </span>

                </div>
                {status && (

                    <div className="hidden md:flex flex-col gap-4 text-center">
                        <span className=" font-bold text-5xl text-white">
                            YOU {status}
                        </span>
                        <button
                            onClick={handleClickPlayAgain}
                            className={` px-14 py-2 rounded-lg bg-white 
                        ${status === 'WIN' ? 'text-blue-500' : status === 'LOSE' ? 'text-red-500' : 'text-gray-500'}`}
                        >
                            PLAY AGAIN
                        </button>
                    </div>
                )}
                <div className="min-w-[150px] min-h-[150px] md:min-w-[200px] md:min-h-[200px] relative flex flex-col gap-8 text-center">
                    <span className="hidden md:flex font-bold text-white">
                        THE HOUSE PICKED
                    </span>
                    <div id="house-option"
                        className="w-[250px] h-[250px] md:w-[500px] md:h-[500px] absolute invisible -translate-x-12 -translate-y-10 md:-translate-x-36 md:-translate-y-20 brightness-110 bg-radial-gradient rounded-full"
                    >
                        <div className="w-[200px] h-[200px] md:w-[400px] md:h-[400px]  translate-x-[11%] translate-y-[11%] md:translate-x-[12%] md:translate-y-[12%] brightness-110 bg-radial-gradient rounded-full">
                            <div className="w-[150px] h-[150px] md:w-[300px] md:h-[300px]  translate-x-[15%] translate-y-[15%] md:translate-x-[17%] md:translate-y-[16%] brightness-110 bg-radial-gradient rounded-full">
                                <IconButton
                                    nameOption={housePicked.nameOption}
                                    iconImg={housePicked.iconImg}
                                    style="visible w-[120px] h-[120px] md:w-[190px] md:h-[190px]  translate-x-[14%] translate-y-[14%] md:translate-x-[28%] md:translate-y-[28%]"
                                    styleButton={`-translate-y-[3%] md:translate-x-[5%] md:translate-y-[3%] ${!housePicked.iconImg ? 'bg-radial-gradient brightness-50 opacity-30' : ''}`}
                                    borderColor={housePicked.borderColor}
                                />
                            </div>
                        </div>
                    </div>

                    <span className="mt-[95%] md:hidden font-bold text-white">
                        THE HOUSE PICKED
                    </span>
                </div>
            </div>

            {status && (

                <div className="flex md:hidden flex-col gap-4 text-center mt-[30%]">
                    <span className=" font-bold text-5xl text-white">
                        YOU {status}
                    </span>
                    <button
                        onClick={handleClickPlayAgain}
                        className={` px-14 py-2 rounded-lg bg-white 
                        ${status === 'WIN' ? 'text-blue-500' : status === 'LOSE' ? 'text-red-500' : 'text-gray-500'}`}
                    >
                        PLAY AGAIN
                    </button>
                </div>
            )}
        </>
    );
}