import styles from './ProjectsStyles.module.css'
import carRental from '../../assets/carrental.svg'
import ProjetCard from '../common/ProjetCard'
import medsuj from '../../assets/medsuj.svg'
import flutter from '../../assets/flutterproject.svg'
import portfolio from '../../assets/portfolio.svg'
import images from '../../assets/images.jpeg'

function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Projets Personnels</h1>
        <div className={styles.projectsContainer}>
            <ProjetCard 
                link={'https://github.com/Prince9b/Location_voiture'}
                src={carRental}
                h3={'NNP'}
                p={'Application web de location de voiture réalisé en Laravel, PostgreSql et React Js'}
            />
            <ProjetCard 
                link={'https://bamakolocation.netlify.app/'}
                src={carRental}
                h3={'LocV'}
                p={'Site web vitrine de location de voiture réalisé avec React Js'}
            />
            <ProjetCard 
                link={''}
                src={medsuj}
                h3={'MedSuj'}
                p="App mobile qui recense les sujets et corrections réalisé en Express Js, MongoDb et React Native"

            />
            <ProjetCard 
                link={''}
                src={flutter}
                h3={'NetflixClone'}
                p={'Clone de Netflix mobile réalisé en Flutter'}
            />
            <ProjetCard 
                link={'https://github.com/Prince9b/Mon_Portfolio.git'}
                src={portfolio}
                h3={'Portfolio'}
                p={'Mon portfolio réalisé en React Js'}
            />
            <ProjetCard
                link={''}
                src={'images'}
                h3={'App de gestion de depenses'}
                p={'Realise avec Django et React Js'}
            />
        </div>
        
    </section>
  )
}

export default Projects