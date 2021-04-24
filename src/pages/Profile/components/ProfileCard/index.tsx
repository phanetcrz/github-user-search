import Button from "../../../../core/components/Button";
import { InfoGithub } from "../../../../core/types/InfoGithub";
import Description from "./components/Description";
import './styles.scss';

type Props = {
    infoGithub: InfoGithub;
}

const ProfileCard = ({ infoGithub }: Props) => (
    <>
        <div className="profile-card-image">
            <img src={infoGithub.avatar_url} alt={infoGithub.name} className="profile-image" />
            <a href={`https:/github.com/${infoGithub.login}`} target="_new">
                <Button text="Ver perfil" />
            </a>
        </div>
        <div className="profile-card-grid">
            <div className="prodile-card-statistic-user">
                <h1>Repositórios públicos: {infoGithub.public_repos}</h1>
                <h1>Seguidores: {infoGithub.followers}</h1>
                <h1>Seguindo: {infoGithub.following}</h1>
            </div>
            <div className="profile-card-description-user">
                <h4 className="profile-card-description-title">
                    Informações
                </h4>
                <Description value={`Empresa: ${infoGithub.company}`} />
                <Description value={`Website/Blog: ${infoGithub.blog}`} />
                <Description value={`Localidade: ${infoGithub.location}`} />
                <Description value={`Membro desde: ${infoGithub.created_at}`} />
            </div>
        </div>
    </>
)

export default ProfileCard;


/*

    <div className="profile-card">
        <div className="row">
            <div className="col-6 pr-5">
                <img src={infoGithub.avatar_url} alt={infoGithub.name} className="profile-card-image" />

                <a href={`https:/github.com/${infoGithub.login}`} target="_new">
                    <Button text="Ver perfil" />
                </a>
            </div>
            <div className="col-6">
                <div className="profile-card-statistic profile-card-repos">
                    Repositórios públicos: {infoGithub.public_repos}
                </div>
                <div className="profile-card-statistic profile-card-followers">
                    Seguidores: {infoGithub.followers}
                </div>
                <div className="profile-card-statistic profile-card-following">
                    Seguidores: {infoGithub.followers}
                </div>
            </div>
        </div>
    </div>
*/