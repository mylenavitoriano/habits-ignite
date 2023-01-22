import './styles.scss'
import { Plus, X } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog';

import logoImage from '../../assets/logo.svg'
import { useState } from 'react'

export function Header(){


    return(
        <div className='header'>
            <img src={logoImage} alt="Habits" />

            <Dialog.Root>
                <Dialog.Trigger 
                    type='button'
                    className='btnNewHabit'
                >
                <Plus size={20} className="iconPlus" />
                Novo hábito
                </Dialog.Trigger>

                <Dialog.Portal>
                    <Dialog.Overlay className='dialogOverlay'/>

                    <Dialog.Content className='dialogContent'>
                        <Dialog.Close className='dialogClose'>
                            <X size={24} arial-label="Fechar" />
                        </Dialog.Close>

                        <Dialog.Title className='dialogTitle'>
                            Criar hábito
                        </Dialog.Title>
                        Conteúdo do modal
                    </Dialog.Content>
                </Dialog.Portal>

            </Dialog.Root>

        </div>
    )
}