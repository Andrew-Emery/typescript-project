export type SkillId = 'react' | 'javascript' | 'css3' | 'html5' | 'git' | 'typescript' | 'rest' | 'eslint' | 'jest';

export interface ExperienceModel {
    name: string;
    skills: SkillId[];
    description: string;
}

export const experiences: ExperienceModel[] = [
    {
        name: 'Portfolio',
        skills: ['typescript', 'react', 'css3', 'html5', 'git', 'rest', 'eslint'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    },
    {
        name: 'Cocktail website',
        skills: ['javascript', 'react', 'css3', 'html5', 'git', 'rest', 'eslint'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    },
    {
        name: 'React to-do list',
        skills: ['javascript', 'react', 'css3', 'html5', 'git', 'eslint'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    },
    {
        name: 'Eloquent javascript (book)',
        skills: ['javascript'],
        description: 'After being recommended by some programmer friends, I read and completed the book eloquent javascript, which teaches both the basic structures and data types as well as introducing more complex javascript.',
    },
    {
        name: 'HTML5 and CSS3 Crash Courses',
        skills: ['css3', 'html5', 'git'],
        description: 'I completed several crash courses both on HTML dom structures and CSS styling, hosted by Traversy Media.',
    }
];

export type SkillDataModel = {
    [key in SkillId]: {
        displayName: string;
        color: string;
    };
};

export const skillData: SkillDataModel = {
    react: {
        displayName: 'React',
        color: 'yellow',
    },
    javascript: {
        displayName: 'javascript',
        color: '#000000',
    },
    css3: {
        displayName: 'CSS3',
        color: '#000000',
    },
    html5: {
        displayName: 'HTML5',
        color: '#000000',
    },
    git: {
        displayName: 'Git',
        color: '#000000',
    },
    typescript: {
        displayName: 'Typescript',
        color: '#000000',
    },
    rest: {
        displayName: 'RESTful API',
        color: '#000000',
    },
    eslint: {
        displayName: 'ESLint',
        color: '#000000',
    },
    jest: {
        displayName: 'Jest',
        color: '#000000',
    },
};