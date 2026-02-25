
var S = ["Fear", "Torture", "Splatter", "Cannibal", "Madness & Paranoia", "Home Invasion", "Crime", "Neo-Monster", "Nature", "Small Creatures", "Giant Monsters" , "Classic Mythology", "Human-animal hybrid", "Scientific Fiction", "Undead", "Virus", "Ghosts & Spirits", "Haunted houses","Possession","Devil, Demons, Hell", "Witches and Occult","Supernatural Powers", "Romance", "Family Reunion","Sitcom","Work-com","Satire","Farce","Unrequited Love","Farmhand Romance","Action","Adventure","Isikai"];

var Taboo = ['Moral Ambiguity', 'Mass Surveillance', 'Philosophical Paradoxes', 'State Oppression', 'Cannibalism', 'Environmental Racism', 'War Profiteering', 'Ethical AI', 'Memory Manipulation', 'Dystopian Societies', 'Spiritual Abuse', 'Sex Trafficking', 'Torture', 'Exploitation of Prison Labor', 'Forced Labor', 'Classism', 'Ethnic Cleansing', 'Ageism', 'Perception of Reality', 'Ethical Dilemmas in Science/Technology', 'Ambiguous Endings', 'Exploitation of Vulnerable Groups', 'Fake News', 'Bestiality', 'Mental Exploitation', 'Emotional Manipulation', 'Genetic Discrimination', 'Social Media Addiction', 'Racism', 'Religious Extremism', 'Mental Institution Abuse', 'Addiction to Technology', 'Cybernetics', 'Loss of Identity', 'Ponzi Schemes', 'Surrealism', 'Grooming', 'Eugenics', 'Abuse of Power', 'Online Harassment', 'Biological Warfare', 'Existential Isolation', 'Posthumanism', 'Body Modification Ethics', 'Cyberbullying', 'Existential Despair', 'Forced Labor Camps', 'Child Abuse', 'Sexism', 'Forced Abortion', 'Body Shaming', 'Gaslighting', 'Transhumanism', 'Coercive Control', 'Bioethics', 'Political Corruption', 'End-of-Life Decisions', 'Data Privacy Concerns', 'Cyberstalking', 'Nuclear Accidents', 'Brainwashing', 'Dehumanization', 'Time Travel Consequences', 'Xenophobia', 'Privacy Invasion', 'Existentialism', 'Forced Displacement', 'Sexual Exploitation', 'Forced Marriage', 'Animal Testing', 'Transphobia', 'Genocide', 'Cloning', 'Scientific Ethics', 'Religious Persecution', 'Euthanasia', 'Exploitative Sweatshops', 'Genetic Engineering', 'Homophobia', 'Climate Crisis', 'Domestic Abuse', 'Sexual Assault', 'Pornography Addiction', 'Chemical Warfare', 'Parallel Universes', 'Necrophilia', 'Abortion', 'Organ Trafficking', 'Prostitution', 'Nuclear Warfare', 'Grey Areas in Morality', 'Misinformation', 'Child Marriage', 'Cyber Exploitation', 'Metafiction', 'Exploitation of Child Labor', 'Forced Addiction', 'Existential Dread', 'Sexual Violence', 'Corruption', 'Institutionalized Discrimination', 'Loss of Autonomy', 'Absurdism', 'Nihilism', 'Animal Cruelty', 'Slavery', 'Capital Punishment', 'Suicide', 'Spiritual Crisis', 'Existential Crises', 'Forced Cannibalism', 'Ecological Destruction', 'Forced Reprogramming', 'Poverty', 'Indentured Servitude', 'Alternate Realities', 'Psychological Torture', 'Environmental Exploitation', 'Identity Theft', 'Blood Diamonds', 'Human Cloning', 'Eating Disorders', 'Fourth Wall Break', 'Environmental Degradation', 'Suicide Bombing', 'Ableism', 'Mental Illness', 'Cultural Appropriation', 'Artificial Intelligence Rights', 'Plagiarism', 'Massacre', 'Drug Addiction', 'Self-harm', 'Pedophilia', 'Financial Exploitation', 'Assisted Suicide', 'Systematic Oppression', 'Sexual Harassment', 'Narrative Manipulation', 'Existential Void', 'Forced Organ Harvesting', 'Holocaust', 'Infanticide', 'Voyeurism', 'Emotional Detachment', 'War Crimes', 'Toxic Cults', 'Mutilation', 'Revenge Porn', 'Existential Angst', 'Child Soldiers', 'Incest', 'Ecological Disasters', 'Gambling Addiction', 'Human Trafficking', 'Virtual Reality Addiction', 'Systemic Racism', 'Manipulation through Media', 'Forced Sterilization', 'Ethical Boundaries in Science', 'Stalking', 'Cultural Genocide', 'Human Experimentation', 'Rape']

var N = ["Acceptance", "Curiousity", "Eating", "Family", "Honour", "Idealism", "Independence", "Order"]
var VN = ["Acceptance", "Curiousity", "Eating", "Family", "Honour", "Idealism", "Independence", "Order"]
var F = ["death", "suffocation", "paralysis", "rejection", "being shunned", "losing self", "abandonment", "imprisonment","being restricted", "blindness", "deafness", "tastelessness", "immobility", "memory loss", "breakup", "being enveloped", "deafness","being numb", "being alone"]
var VF = ["death", "suffocation", "paralysis", "rejection", "being shunned", "losing self", "abandonment", "imprisonment","being restricted", "blindness", "deafness", "tastelessness", "immobility", "memory loss", "breakup", "being enveloped", "deafness","being numb", "being alone"]
var Career = [ "Waiter/Waitress", "Retail Worker",  "Janitor/Cleaner",  "Delivery Driver", "Receptionist",  "Barista", "Freelance Writer", "Assistant Teacher", "Personal Assistant",  "Social Media Manager", "Bartender",  "Security Guard",  "Farm Worker",  "Taxi/Uber Driver",  "Customer Service Representative",  "Cashier",  "Caregiver/Nurse Assistant",  "Sales Representative",  "Event Planner",  "Data Entry Clerk",  "Graphic Designer",  "Fitness Instructor",  "Librarian",  "Chef/Cook",  "Photographer",  "Construction Worker",  "Bank Teller",  "Veterinary Assistant",  "Travel Agent",  "Electrician",  "Plumber",  "Journalist", "Paramedic","Legal Assistant",  "Translator/Interpreter",  "Archivist",  "Carpenter",  "Musician",  "Hairdresser/Barber",  "Real Estate Agent",  "Childcare Worker",  "Landscaper/Gardener",  "Flight Attendant",  "Insurance Agent",  "Painter",  "Pharmacy Technician",  "Fitness Trainer",  "Sous Chef",  "Mover",  "Claims Adjuster",  "Social Worker",  "Web Developer",  "Marketing Coordinator",  "Dental Assistant",  "Theater Actor/Actress", "Event Coordinator",  "Massage Therapist",  "IT Support Specialist",  "Architect",  "Biologist",  "Fashion Designer",  "Software Engineer",  "Mechanic",  "Human Resources Coordinator",  "Paramedic",  "Bankruptcy Lawyer",  "Meteorologist",  "Stylist",  "Dietitian/Nutritionist",  "Optometrist",  "Chemist",  "Marine Biologist",  "Speech Therapist",  "Phlebotomist",  "Probation Officer",  "Art Director",  "Zoologist",  "Chiropractor",  "Sports Agent",  "Air Traffic Controller",  "Film Director",  "Geologist",  "Academic Advisor",  "Orthodontist",  "Forensic Scientist",  "Public Relations Specialist",  "Financial Analyst", "Criminal Investigator",  "Professor",  "Nuclear Engineer",  "Magazine Editor",  "Foreign Correspondent",  "Robotics Engineer",  "Political Analyst",  "Ethical Hacker",  "Astronomer",  "Astrophysicist",  "Cryptographer",  "Neuroscientist",  "Data Scientist",  "Ethnographer",  "Quantum Physicist",  "Game Developer",  "Environmental Lawyer",  "Biochemist",  "Screenwriter",  "Chief Technology Officer",  "Chief Executive Officer"]
// Add more careers here...
var VCareer = [ "Waiter/Waitress", "Retail Worker",  "Janitor/Cleaner",  "Delivery Driver", "Receptionist",  "Barista", "Freelance Writer", "Assistant Teacher", "Personal Assistant",  "Social Media Manager", "Bartender",  "Security Guard",  "Farm Worker",  "Taxi/Uber Driver",  "Customer Service Representative",  "Cashier",  "Caregiver/Nurse Assistant",  "Sales Representative",  "Event Planner",  "Data Entry Clerk",  "Graphic Designer",  "Fitness Instructor",  "Librarian",  "Chef/Cook",  "Photographer",  "Construction Worker",  "Bank Teller",  "Veterinary Assistant",  "Travel Agent",  "Electrician",  "Plumber",  "Journalist", "Paramedic","Legal Assistant",  "Translator/Interpreter",  "Archivist",  "Carpenter",  "Musician",  "Hairdresser/Barber",  "Real Estate Agent",  "Childcare Worker",  "Landscaper/Gardener",  "Flight Attendant",  "Insurance Agent",  "Painter",  "Pharmacy Technician",  "Fitness Trainer",  "Sous Chef",  "Mover",  "Claims Adjuster",  "Social Worker",  "Web Developer",  "Marketing Coordinator",  "Dental Assistant",  "Theater Actor/Actress", "Event Coordinator",  "Massage Therapist",  "IT Support Specialist",  "Architect",  "Biologist",  "Fashion Designer",  "Software Engineer",  "Mechanic",  "Human Resources Coordinator",  "Paramedic",  "Bankruptcy Lawyer",  "Meteorologist",  "Stylist",  "Dietitian/Nutritionist",  "Optometrist",  "Chemist",  "Marine Biologist",  "Speech Therapist",  "Phlebotomist",  "Probation Officer",  "Art Director",  "Zoologist",  "Chiropractor",  "Sports Agent",  "Air Traffic Controller",  "Film Director",  "Geologist",  "Academic Advisor",  "Orthodontist",  "Forensic Scientist",  "Public Relations Specialist",  "Financial Analyst", "Criminal Investigator",  "Professor",  "Nuclear Engineer",  "Magazine Editor",  "Foreign Correspondent",  "Robotics Engineer",  "Political Analyst",  "Ethical Hacker",  "Astronomer",  "Astrophysicist",  "Cryptographer",  "Neuroscientist",  "Data Scientist",  "Ethnographer",  "Quantum Physicist",  "Game Developer",  "Environmental Lawyer",  "Biochemist",  "Screenwriter",  "Chief Technology Officer",  "Chief Executive Officer"]
var storedPrompts =[];

function readText (form) {
    TestVar =form.inputbox.value;
    alert ("You typed: " + TestVar);
}

function writeText (form) {
    form.inputbox.value = "Have a nice day!"
}

function pickRandom (form){


var randInt = Math.floor(Math.random() * (S.length) ) ;
var Sitem = S[randInt]

var randInt = Math.floor(Math.random() * (Taboo.length) ) ;
var Tabooitem = Taboo[randInt]

var randInt = Math.floor(Math.random() * (N.length) ) ;
var Nitem = N[randInt]
// console.log(randInt)
    
var randInt = Math.floor(Math.random() * (N.length) ) ;
var VNitem = VN[randInt]

var randInt = Math.floor(Math.random() * (F.length) ) ;
var Fitem = F[randInt]

var randInt = Math.floor(Math.random() * (F.length) ) ;
var VFitem = VF[randInt]

var randInt = Math.floor(Math.random() * (N.length) ) ;
var Nitem = N[randInt]

var randInt = Math.floor(Math.random() * (Career.length) ) ;
var Careeritem = Career[randInt]

var randInt = Math.floor(Math.random() * (VCareer.length) ) ;
var VCareeritem = VCareer[randInt]
form.Textblock.value = "Genre: " + Sitem + "\nTaboo: " + Tabooitem +" Protag Desires: "+Nitem +" Vill Desires: "+VNitem+ " Protag fears: " + Fitem+" Vill fears: " + VFitem + " Protag career: " + Careeritem + " Antagonist career: " + VCareeritem;
form.Settings.value = "Genre: " + Sitem
form.Taboo.value = "Taboo: " + Tabooitem
form.Needs.value = "Protag Desires: "+Nitem
form.VNeeds.value = "Vill Desires: "+VNitem
form.fears.value = "Protag fears: " + Fitem
form.Vfears.value = "Vill fears: " + VFitem 
form.Career.value = "Protag career: " + Careeritem
form.Antag.value = "Antagonist career: " + VCareeritem

storedPrompts.push( "Genre: " + Sitem + " Taboo: " + Tabooitem + " Protag Desires: " + Nitem + " Vill Desires: " + VNitem + " Protag fears: " + Fitem + " Vill fears: " + VFitem +    " Protag career: " + Careeritem + " Antagonist career: " + VCareeritem  );
var textToWrite = "Genre: " + Sitem + "\nTaboo: " + Tabooitem +" Protag Desires: "+Nitem +" Vill Desires: "+VNitem+ " Protag fears: " + Fitem+" Vill fears: " + VFitem + " Protag career: " + Careeritem + " Antagonist career: " + VCareeritem;

/*var existingContent = localStorage.getItem('downloadableContent') || '';
var updatedContent = existingContent + textToWrite;

localStorage.setItem('downloadableContent', updatedContent);
var blob = new Blob ([updatedContent], {type: 'text/plain'});

var url = window.URL.createObjectURL(blob);

var link = document.createElement('a'); 
	
link.href =url;
link.download ='horror_prompts.txt';
link.click(); */

}

function downloadAllPrompts() {
  // Create a text blob from stored prompts
  var textToSave = storedPrompts.join('\n\n');
  var blob = new Blob([textToSave], { type: 'text/plain' });

  // Create a link element and trigger the download
  var link = document.createElement('a');
  link.download = 'all_horror_prompts.txt';
  link.href = window.URL.createObjectURL(blob);
  link.click();
}	
