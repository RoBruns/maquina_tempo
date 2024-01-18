const styles = {
    color: '#f00'
}

interface ButtonProps {
    title: string;
}

export function Button(props: ButtonPropsd) {
    return (
        <p style={styles}>Teste {props.title}</p>
    );
}