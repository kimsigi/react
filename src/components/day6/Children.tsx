type ChildrenProps = {
    text: string;
    evt: (value: string) => void;
    hevent: () => void;
};
export default function Children({text, evt, hevent}: ChildrenProps) {
    return (
        <>
            <input placeholder="자식 컴포넌트"
                   value={text} 
                   onChange={(e) => evt(e.target.value)} 
            />

            <button onClick={hevent}>부모이벤트실행</button>
        </>
    );
}