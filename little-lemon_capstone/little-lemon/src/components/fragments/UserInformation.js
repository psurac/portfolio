export function UserInformation( { info, show = false } ) {
    return (
        <h2 className="weeksspecial"
        style={{
            diplay: show ? 'block' : 'none',
            backgroundColor: 'var(--sec1)',
            color: 'var(--sec4)',
            textAlign: 'center',
            padding: '10px',
        }}>
            {info}
        </h2>
    );
};