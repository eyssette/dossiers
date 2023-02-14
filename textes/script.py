import os
import re

def extract_info(file):
    # Extract title, categories, tags, text, author and reference from each file
    with open(file, 'r') as f:
        lines = f.read().splitlines()
        title = None
        categories = None
        tags = None
        text = ""
        author = None
        reference = None
        in_text = False
        for line in lines:
            if line.startswith("title:"):
                title = line.strip().split("title: ")[1]
                title = title.replace('"','')
                if "–" in title :
                    title = title.split("–")[1]
                    title = title.lstrip().replace('"','')
            elif line.startswith("categories:"):
                categories = line.strip().split("categories: ")[1]
            elif line.startswith("tags:"):
                tags = line.strip().split("tags: ")[1]
                tags = tags.replace("[","").replace("]","")
                tagsArray = tags.split(",")
                tags = " ".join(map(lambda x:x.strip().replace(" ","_"),tagsArray))
            elif line.endswith("»") and line.startswith("«"):
                in_text = False
                if not (categories in line):
                    text += "<br>" + line.strip()
                for l in lines[::-1]:
                    if "," in l:
                        if ", _" in l:
                            pos = l.find(", _")
                        else:
                            pos = l.find(", ")
                        if ", «" in l:
                            pos = l.find(", «")
                        author = l[:pos].strip()
                        reference = l[pos + 1:].strip()
                        break
            elif line.endswith("»") and not(line.startswith("«")):
                in_text = False
                if not (categories in line):
                    text += "<br>" + line.strip()
                for l in lines[::-1]:
                    if "," in l:
                        if ", _" in l:
                            pos = l.find(", _")
                        else:
                            pos = l.find(", ")
                        if ", «" in l:
                            pos = l.find(", «")
                        author = l[:pos].strip()
                        reference = l[pos + 1:].strip()
                        break
            elif in_text == False and line.startswith("«") :
                in_text = True
                text += line.strip().split("«")[1]
            elif in_text:
                text += "<br>" + line.strip()
    return text, author, reference, tags, title

def transform_to_tsv(directory, tsv_file):
    # Transform the contents of the files in the directory to a single tsv file
    if isinstance(tsv_file, str):
        tsv_file = open(tsv_file, "w")
    # with open(tsv_file, 'w') as f:
    for file in os.listdir(directory):
        if file.endswith(".md"):
            text, author, reference, tags, title = extract_info(os.path.join(directory, file))
            text = text.lstrip()
            text = text.rstrip()
            match directory:
                case "_anarchisme":
                    dossier = "Anarchisme"
                case "_ethique_animale":
                    dossier = "Éthique animale"
                case "_ethique_environnementale":
                    dossier = "Éthique environnementale"
                case "_grands_defis_environnementaux":
                    dossier = "Grands Défis Environnementaux"
                case "_identite_personnelle":
                    dossier = "Identité personnelle"
                case "_l_education_rend_elle_libre":
                    dossier = "L'éducation rend-elle libre ?"
                case "_le_bonheur_n_est_il_qu_un_ideal":
                    dossier = "Le bonheur n'est-il qu'un idéal ?"
                case "_le_langage_est_il_un_simple_moyen_de_communication":
                    dossier = "Le langage n'est-il qu'un simple moyen de communication ?"
                case "_le_temps_est_il_un_obstacle_au_bonheur":
                    dossier = "Le temps est-il un obstacle au bonheur ?"
                case "_les_differents_sens_de_la_notion_de_liberte":
                    dossier = "Différents sens de la notion de liberté"
                case "_philosophie_contemporaine_de_la_technique":
                    dossier = "Philosophie contemporaine de la technique"
                case "_philosophie_de_la_culture":
                    dossier = "Philosophie de la culture"    
            if not text.startswith("«"):
                text = "« " + text
            if not text.endswith("»"):
                text = text + " »"
            if (reference):
                reference = re.sub(r"\_(.*?)\_",r"<i>\1</i>",reference)
                reference = re.sub(r"\*(.*?)\*",r"<i>\1</i>",reference)
                reference = re.sub(r"\[.*?\]\((.*?)\)",r'<a href="\1">lien</a>',reference)
            tsv_file.write(f"{text}\t{author}\t{reference}\t{dossier}\t{tags}\t{title}\n")
    tsv_file.close()

# tsv_file = "output.tsv"
# for directory in os.listdir():
#     if directory.startswith("_") and os.path.isdir(directory) == True:
#         # print(directory)
#         tsv_file = f"{directory}.tsv"
#         transform_to_tsv(directory, tsv_file)

tsv_file = "output.tsv"
for directory in os.listdir():
    if directory.startswith("_") and os.path.isdir(directory) == True:
        # print(directory)
        with open(tsv_file, "a") as tsv_file_handle:
            transform_to_tsv(directory, tsv_file_handle)