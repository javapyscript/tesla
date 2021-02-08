import './Title.scss';

interface TitleProps{
    title: string;
    description: string;
}


const Title = (props: TitleProps): JSX.Element => {
    return (
        <div className="page-title">
            <div className="main-title">{props.title}</div>
            <div className="description" dangerouslySetInnerHTML={{__html: props.description}}></div>
        </div>
    );
}

export default Title;