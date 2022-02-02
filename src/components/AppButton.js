
function AppButton({ buttonColor, buttonLabel, onClickFunct } ) {
    const style = {
        backgroundColor: buttonColor,
        padding: '10px'
    };
    return (
        <div className="AppButton">
            <button style={style} onClick={() => onClickFunct()}
            >{buttonLabel}</button></div>
    );
}

export default AppButton;