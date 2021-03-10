 import TableCell from '@material-ui/core/TableCell';
import { NavLink } from 'react-router-dom';
import TableRow from '@material-ui/core/TableRow';

 const TeamPlayer = ({player}) => {
    return (
    <>            
                <TableRow key={player.id}>
                  <TableCell>{player.jerseyNumber}</TableCell>
                  <TableCell>
                    <NavLink color='primary' to={`/playerStats/${player.id}`}>
                      {player.firstName} {player.lastName}
                    </NavLink>
                  </TableCell>
                  <TableCell>{player.primaryPosition}</TableCell>
                  <TableCell>{player.height}</TableCell>
                  <TableCell>{player.weight}</TableCell>
                  <TableCell>{player.birthDate}</TableCell>
                  <TableCell>{player.age}</TableCell>
                  <TableCell>{player.college}</TableCell>
                </TableRow>
              </>
    )
}

export default TeamPlayer;
