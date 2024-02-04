import './HeaderTitle.css'
export const HeaderTitle = () => {
    let currentDate = new Date();

    return (
        <div>
            <h1> Ход торгов </h1>
            <p>
                {`${currentDate.toLocaleDateString()}`}
            </p>

        </div>
    )


}