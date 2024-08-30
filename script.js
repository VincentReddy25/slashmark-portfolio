const skills = [
    {
        skill_title: 'html',
        skill_percentage: 90,
    },
    {
        skill_title: 'css',
        skill_percentage: 80,
    },
    {
        skill_title: 'js',
        skill_percentage: 70,
    },
    {
        skill_title: 'Tailwind',
        skill_percentage: 60,
    },
    {
        skill_title: 'react',
        skill_percentage: 70,
    },
    {
        skill_title: 'sql',
        skill_percentage: 70,
    },
    {
        skill_title: 'java',
        skill_percentage: 70
    },
    {
        skill_title: 'git and Github',
        skill_percentage: 70
    }

]

function createSkill(skill) {
    return `
        <div class="skill">
            <p class="skill_title">${skill.skill_title}</p>
        </div>
    `;
}

function generateSkill() {
    const skills_Container = document.querySelector(".skills_container");

    skills.forEach(skill => {
        const skill_Card = createSkill(skill);
        skills_Container.innerHTML += skill_Card
    })
}

generateSkill();


