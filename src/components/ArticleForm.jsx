import { useSelector } from 'react-redux';
import { Input, Loader, TextAria } from '../ui';

const ArticleForm = (props) => {
    const { title, setTitle, body, setBody, description, setDescription, formSubmit } = props
    const { isLoading } = useSelector(state => state.article)
    return (
        <div>
            <form onSubmit={formSubmit}>
                <Input label={"Title"} state={title} setState={setTitle} />
                <TextAria label={'Description'} state={description} setState={setDescription} />
                <TextAria label={'Body'} state={body} setState={setBody} />
                <button className="btn btn-primary w-100 py-2" type='submit'>
                    {
                        isLoading ? <Loader/> : 'Create'
                    }
                </button>
            </form>
        </div>
    );
}

export default ArticleForm;

