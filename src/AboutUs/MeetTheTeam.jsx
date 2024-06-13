import { Box, Grid, Typography } from '@mui/material';
import TeamMemberCard from './TeamMemberCard';
import shaan from '../assets/shaan.png';
import juan from '../assets/juan.png';
import noah from '../assets/noah.png';

const MeetTheTeam = ({ expandedCard, handleCardClick }) => (
    <Box marginTop={10} marginBottom={10}>
        <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold' }}>
            Meet the Team
        </Typography>
        <Grid container spacing={4} justifyContent="center" marginTop={3}>
            {[
                { name: 'Shaan Malhotra', title: 'Co-Founder', image: shaan, email: 'shaan.malhotra@cvent.com', phone: '703-803-8066' },
                { name: 'Juan Pinol', title: 'Co-Founder', image: juan, email: 'juan.pinol@cvent.com', phone: '703-789-9169' },
                { name: 'Noah Beito', title: 'Co-Founder', image: noah, email: 'noah.beito@cvent.com', phone: '703-233-5432' },
            ].map((member) => (
                <Grid item xs={12} sm={6} md={4} key={member.name}>
                    <TeamMemberCard
                        name={member.name}
                        title={member.title}
                        image={member.image}
                        email={member.email}
                        phone={member.phone}
                        isExpanded={expandedCard === member.name}
                        onClick={() => handleCardClick(member.name)}
                    />
                </Grid>
            ))}
        </Grid>
    </Box>
);

export default MeetTheTeam;