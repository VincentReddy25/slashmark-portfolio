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
        skill_title: 'scss',
        skill_percentage: 60,
    },
    {
        skill_title: 'figma',
        skill_percentage: 70,
    },
    {
        skill_title: 'react',
        skill_percentage: 70,
    },
    {
        skill_title: 'angular',
        skill_percentage: 50,
    },

]

function createSkill(skill) {
    return `
        <div class="skill">
            <p class="skill_title">${skill.skill_title}</p>
            <p class="skill_percentage">${skill.skill_percentage}%</p>
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


