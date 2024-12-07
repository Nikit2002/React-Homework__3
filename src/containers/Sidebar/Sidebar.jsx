import './Sidebar.scss';
import Topics from '../../components/Topics/Topics';



const Sidebar = () => {
  return (
    <div className="Sidebar">
      <nav>
        <ul>
          <Topics/>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
