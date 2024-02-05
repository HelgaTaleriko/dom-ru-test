import './ButtonUpdate.css'

export const ButtonUpdate = ({onUpdate}) => {
    return (
        <button className='button-update' onClick={onUpdate}>
            Обновить данные
        </button>)
}

