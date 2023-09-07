function UserInformation( { info, show = false } ) {
    return (
        <h2 className="weeksspecial"
        style={{
            diplay: show ? 'block' : 'none',
            backgroundColor: 'var(--sec1)',
            color: 'var(--sec4)',
            textAlign: 'center',
            padding: show ? '10px' : '',
        }}
        role="alert">
            {info}
        </h2>
    );
};

export default UserInformation;