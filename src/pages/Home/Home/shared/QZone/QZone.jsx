import qzone1 from '../../../../../assets/qZone1.png'
import qzone2 from '../../../../../assets/qZone2.png'
import qzone3 from '../../../../../assets/qZone3.png'

const QZone = () => {
    return (
        <div>
            <h4 className="text-secondary text-center py-4">Q-Zone</h4>
            <div>
                <img src={qzone1} alt="" />
                <img src={qzone2} alt="" />
                <img src={qzone3} alt="" />
            </div>
        </div>
    );
};

export default QZone;