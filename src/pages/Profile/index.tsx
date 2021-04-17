import { useState } from 'react';
import Button from '../../core/components/Button';
import { makeRequest } from '../../core/request';
import './styles.scss';

type FormState = {
    name: string;
}

type FormEvent = React.ChangeEvent<HTMLInputElement>;

const Profile = () => {

    const handleOnChange = (event: FormEvent) => {
        const name = event.target.name;
        const value = event.target.value;

        setFormData(formData => ({ formData, [name]: value }));
    }

    const [formData, setFormData] = useState<FormState>({
        name: ''
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        makeRequest({ url: `/${formData.name}` })
            .then(response => console.log(response.data));
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="profile-container">
                <div>
                    <div className="profile-title col-6">
                        Encontre um perfil Github
                    </div>
                    <input
                        value={formData.name}
                        className="profile-text"
                        name="name"//Atributo chamado "name" é o nome que identifica o campo 
                        type="text"
                        onChange={handleOnChange}
                        placeholder="Usuário Github"
                    />
                    <Button text="Encontrar" />
                </div>
            </div>
        </form>
    )
};

export default Profile;