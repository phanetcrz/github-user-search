import { useState } from 'react';
import Button from '../../core/components/Button';
import { makeRequest } from '../../core/request';
import { InfoGithub } from '../../core/types/InfoGithub';
import Loaders from './components/Loaders/Loaders';
import ProfileCard from './components/ProfileCard';
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

        setIsLoading(true);
        makeRequest({ url: `/${formData.name}` })
            .then(Response => setInfoResponse(Response.data))
            .finally(() => {
                setIsLoading(false);
            })
    }

    const [infoResponse, setInfoResponse] = useState<InfoGithub>();

    const [isLoading, setIsLoading] = useState(false);

    return (
        <form onSubmit={handleSubmit}>
            <div className="profile-search">
                <div className="profile-search-title">
                    Encontre um perfil Github
                </div>
                <input
                    value={formData.name}
                    className="profile-search-text"
                    name="name"//Atributo chamado "name" é o nome que identifica o campo 
                    type="text"
                    onChange={handleOnChange}
                    placeholder="Usuário Github"
                />
                <Button text="Encontrar" />
            </div>
            <div className="profile-info-container">
                {isLoading ? <Loaders /> : (
                    infoResponse?.name && (
                        <ProfileCard infoGithub={infoResponse} />
                    )
                )}
            </div>
        </form>
    )
};

export default Profile;
