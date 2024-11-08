import React, { useState } from 'react';
import LayoutCreateNameBoard from '../../layout/LayoutCreateNameBoard/LayoutCreateNameBoard';
import LayoutCreateColumnBoard from '../../layout/LayoutCreateColumnBoard/LayoutCreateColumnBoard';
import InputCustom from '../../components/Input/InputCustom';
import LayoutViewBoard from '../LayoutViewBoard/LayoutViewBoard';
import ButtonCustom from '../../components/Button/ButtonCustom';
import { number } from 'yup';

const CreatBoardTemplate = () => {
    const [step, setStep] = useState(0);
    const [nameBoard, setNameBoard] = useState('');

    const handleStep = (number) => {
        setStep(step + number);
    };

    const handleChangeNameBoard = (event) => {
        setNameBoard(event.target.value);
    };

    const handleResetNameBoard = () => {
        setNameBoard('');
    };
    const handleNextStep = () => {
        setStep(step + number);
    }

    const renderCreateBoard = () => {
        switch (step) {
            case 0:
                return (
                    <LayoutCreateNameBoard

                        handleStep={handleStep}
                        handleChangeNameBoard={handleChangeNameBoard}
                        handleResetNameBoard={handleResetNameBoard}
                        nameBoard={nameBoard}
                    />
                );
            case 1:
                return <LayoutCreateColumnBoard />;
            default:
                return null;
        }
    };

    return (
        <div className="h-screen flex">
            <div className="w-1/2 py-8 px-16 flex flex-col justify-center">
                <div className="create_board_logo">
                    <img className="mb-16 h-6" src="/public/work-management.png" alt="signup" />
                </div>


                {renderCreateBoard()}
                <div className='mt-20 flex justify-between w-full'>
                    {step !== 0 ? (
                        <ButtonCustom
                            content={<>
                                <i className='fa-solid fa-angle-left mr-2'></i>
                                <span>Back</span>
                            </>
                            }
                            styleButton="border-gray-300 border"
                            className={'w-max'}
                            onClick={() => {
                                handleNextStep(-1);
                            }}
                        />
                    ) : (<div></div>
                    )}
                    <ButtonCustom
                    
                    content={
                        <>
                        <span>Next</span>
                        </>
                    }
                    
                    />
                </div>
            </div>

            <div className="w-1/2 bg-orange-300 flex items-center justify-center">
                <LayoutViewBoard
                    nameBoard={nameBoard}
                    handleChangeNameBoard={handleChangeNameBoard}
                    handleResetNameBoard={handleResetNameBoard}
                    handleStep={handleStep}
                />
            </div>
        </div>
    );
};

export default CreatBoardTemplate;
