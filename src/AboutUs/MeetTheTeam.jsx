import { Box, Grid, Typography } from '@mui/material';
import TeamMemberCard from './TeamMemberCard';
import shaan from '../assets/shaan.png';
import juan from '../assets/juan.png';
import noah from '../assets/noah.png';

const MeetTheTeamSection = ({ expandedCard, handleCardClick }) => (
    <Box marginTop={10} marginBottom={10}>
        <Typography variant="h4" align="center" gutterBottom>
            Meet the Team
        </Typography>
        <Grid container spacing={4} justifyContent="center" marginTop={3}>
            {[
                { name: 'Shaan Malhotra', title: 'Co-Founder', image: shaan },
                { name: 'Juan Pinol', title: 'Co-Founder', image: juan },
                { name: 'Noah Beito', title: 'Co-Founder', image: noah },
            ].map((member) => (
                <Grid item xs={12} sm={6} md={4} key={member.name}>
                    <TeamMemberCard
                        name={member.name}
                        title={member.title}
                        image={member.image}
                        isExpanded={expandedCard === member.name}
                        onClick={() => handleCardClick(member.name)}
                    />
                </Grid>
            ))}
        </Grid>
    </Box>
);

export default MeetTheTeamSection;