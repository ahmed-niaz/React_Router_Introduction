import PropTypes from 'prop-types'

const Link = ({route}) => {
    // console.log(route);
    return (
       <main>
        
         <li>
            <a href={route.path}>{route.name}</a>
         </li>
       </main>
    );
};
Link.propTypes = {
    route:PropTypes.object.isRequired,
}
export default Link;