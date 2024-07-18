import React, { useState } from 'react';
import { Input, TextAria } from '../ui';

const CreateArticle = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [body, setBody] = useState('')
    return (
        <div className='text-center'>
            <h1 className='fs-2'>Create Article</h1>
            <div className='w-75 mx-auto'>
                <form>
                    <Input label={"Title"} state={title} setState={setTitle} />
                    <TextAria label={'Description'} state={description} setState={setDescription} />
                    <TextAria label={'Body'} state={body} setState={setBody} />
                    <button className="btn btn-primary w-100 py-2">
                        Create
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CreateArticle;
