import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow  from "@material-ui/core/TableRow";

const Header = () => {
    return (          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Players</TableCell>
              <TableCell>Position</TableCell>
              <TableCell>Height</TableCell>
              <TableCell>Weight</TableCell>
              <TableCell>BirthDate</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>College</TableCell>
            </TableRow>
          </TableHead> );
}
 
export default Header;