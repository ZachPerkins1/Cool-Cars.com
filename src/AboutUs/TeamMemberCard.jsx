import { Card, CardContent, Avatar, Typography } from '@mui/material';

const TeamMemberCard = ({ name, title, image, email, phone, isExpanded, onClick }) => (
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
                        {email}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" align="center">
                        {phone}
                    </Typography>
                </>
            )}
        </CardContent>
    </Card>
);

export default TeamMemberCard;