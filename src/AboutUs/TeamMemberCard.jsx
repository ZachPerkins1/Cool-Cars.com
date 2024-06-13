import { Card, CardContent, Avatar, Typography } from '@mui/material';

const TeamMemberCard = ({ name, title, image, isExpanded, onClick }) => (
    <Card className={isExpanded ? 'expandedCard' : 'card'} onClick={onClick}>
        <CardContent>
            <Avatar style={{ margin: '0 auto', width: 100, height: 100 }} alt={name} src={image} />
            <Typography variant="h5" align="center" gutterBottom>
                {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" align="center">
                {title}
            </Typography>
            {isExpanded && (
                <>
                    <Typography variant="body2" color="textSecondary" align="center">
                        Email: {name.toLowerCase().split(' ').join('')}@example.com
                    </Typography>
                    <Typography variant="body2" color="textSecondary" align="center">
                        Phone: +1234567890
                    </Typography>
                </>
            )}
        </CardContent>
    </Card>
);

export default TeamMemberCard;