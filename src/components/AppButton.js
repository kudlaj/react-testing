
function AppButton(props) {
    const { buttonColor, buttonLabel, onClickFunct } = props;
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