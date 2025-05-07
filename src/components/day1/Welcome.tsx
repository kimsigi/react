type welcomeType = {name: string;}
export default function Welcome(props: welcomeType): React.JSX.Element {
    return <h1>환영합니다!!!. {props.name}님!</h1>;
}