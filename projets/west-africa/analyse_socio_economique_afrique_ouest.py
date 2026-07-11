import pandas as pd
import numpy as np
#west_africa_different_country
countries= [
    "Bénin",
    "Burkina Faso",
    "Cape Vert",
    "Côte d'Ivoire",
    "Gambie",
    "Ghana",
    "Guinée",
    "Guinée-Bissau",
    "Libéria",
    "Mali",
    "Mauritanie",
    "Niger",
    "Nigeria",
    "Senégal",
    "Sierra Léone",
    "Togo"
]
#capitals_per_country
capitals = [
    "Porto-Novo", 
    "Ouagadougou",
    "Praia", 
    "Yamoussoukro",
    "Banjul", 
    "Accra",
    "Conakry", 
    "Bissau",
    "Monrovia",
    "Bamako",
    "Nouakchott", 
    "Niamey", 
    "Abuja", 
    "Dakar", 
    "Freetown",
    "Lomé"
]

#Population_per_country 2026
populations=[
    14814460,
    24074580, 
    527326, 
    32711547,
    2822093, 
    35064272, 
    15099727,
    2249515, 
    5731206, 
    25198821, 
    5315065, 
    27917831, 
    237527782, 
    18931966, 
    8819794, 
    8591626
 ]
 #areas_per_country_per km2
areas=[
    114763,
    274200, 
    4033,
    322462,  
    11300, 
    238540, 
    245857, 
    36120,
    111369, 
    1030700,
    1240192, 
    1267000, 
    923768, 
    196722, 
    71740, 
    56600 
]
#Gross domestic product per country 2024-2025
gdp_billion_usd = [
    21.48,
    23.12,
    2.57,
    87.11,
    2.41,
    82.31,
    25.01,
    2.22,
    4.78,
    26.79,
    10.77,
    19.88,
    252.26,
    32.81,
    6.97,
    10.65
]
#Unemployement_rate_per_country 2024-2025
unemployment_rate=[   
    2.5,
    3.5,
    3.1,
    2.9,
    4.1,
    3.2,
    5.0,
    2.7,
    3.8,
    3.3,
    10.3,
    3.0,
    4.5,
    4.2,
    4.0,
    2.8
]
#minimum wage in local currenc per country 2024-2025
minimum_wage = [
    52000,    # Bénin (XOF)
    45000,    # Burkina Faso (XOF)
    17000,    # Cap-Vert (CVE)
    75000,    # Côte d'Ivoire (XOF)
    1100,       # Gambie (GMD / jour)
    587.79,    # Ghana (GHS / jour)
    550000,   # Guinée (GNF)
    75000,    # Guinée-Bissau (XOF)
    5000,     # Libéria (LRD)
    45000,    # Mali (XOF)
    4500,     #Mauritanie (MRU)
    42000,    # Niger (XOF)
    70000,    # Nigeria (NGN)
    75000,    # Sénégal (XOF)
    800,   # Sierra Leone (SLL)
    52500     # Togo (XOF)
]
#taux de change 2026
taux_usd = [
    572.50,   # Bénin (XOF)
    572.50,   # Burkina Faso (XOF)
    96.85,    # Cap-Vert (CVE)
    572.50,   # Côte d'Ivoire (XOF)
    73.50,    # Gambie (GMD)
    11.44,    # Ghana (GHS)
    8780.00,  # Guinée (GNF)
    572.50,   # Guinée-Bissau (XOF)
    181.63,   # Libéria (LRD)
    572.50,   # Mali (XOF)
    40.08,    # Mauritanie (MRU)
    572.50,   # Niger (XOF)
    1378.42,  # Nigeria (NGN)
    572.50,   # Sénégal (XOF)
    24.35,    # Sierra Leone (SLE)
    572.50    # Togo (XOF)
]

#currency_per_country
currencies = [
    "Franc CFA (XOF)",
    "Franc CFA (XOF)",
    "Escudo cap-verdien (CVE)",
    "Franc CFA (XOF)",
    "Dalasi (GMD)",
    "Cedi (GHS)",
    "Franc guinéen (GNF)",
    "Franc CFA (XOF)",
    "Dollar libérien (LRD)",
    "Franc CFA (XOF)",
    "Ouguiya (MRU)",
    "Franc CFA (XOF)",
    "Naira (NGN)",
    "Franc CFA (XOF)",
    "Leone (SLE)",
    "Franc CFA (XOF)"
]
#inflation rate of each country per  year 2025
inflation_rate = [
    1.1,
    -0.6,
    2.3,
    0.1,
    11.6,
    14.2,
    3.5,
    0.9,
    8.3,
    3.3,
    1.5,
    -4.5,
    23.0,
    1.5,
    7.5,
    0.4
]
 
life_expectancy = [
    60.6,   # Bénin
    59.7,   # Burkina Faso
    69.7,   # Cap-Vert
    58.9,   # Côte d'Ivoire
    61.0,   # Gambie
    63.8,   # Ghana
    61.6,   # Guinée
    65.3,   # Guinée-Bissau
    65.9,   # Libéria
    60.8,   #Mali
    68.9,   # Mauritanie
    62.0,   # Niger
    54.8,   # Nigeria
    68.4,   # Sénégal
    55.2,   # Sierra Leone
    61.9    # Togo
]
#Print data about Benin
benin_index = countries.index("Bénin")
(
    countries[benin_index],
    capitals[benin_index],
    populations[benin_index],
    areas[benin_index],
    gdp_billion_usd[benin_index],
    unemployment_rate[benin_index],
    minimum_wage[benin_index],
    currencies[benin_index],
    inflation_rate[benin_index],
    life_expectancy[benin_index]
)
#Data about Ghana
ghana_index= countries.index('Ghana')
('country :',
    countries[ghana_index],
   'capital :',capitals[ghana_index],
   'population :',populations[ghana_index],
   'areas :',areas[ghana_index],
   'gdp_usd :',gdp_billion_usd[ghana_index],
   'unemplyment rate :',      unemployment_rate[ghana_index],
   'minimum wage :', minimum_wage[ghana_index],
  'currency :',  currencies[ghana_index],
  'inflation rate : ',  inflation_rate[ghana_index],
    'life expectancy :', life_expectancy[ghana_index]
)
#create a dictionnaire west_africa_data
my_dict={'countries':countries, 'capitals': capitals,  'populations' : populations, 'areas':areas, 'gdp_billion_usd': gdp_billion_usd, 'unemployment_rate': unemployment_rate, 'minimum_wage': minimum_wage, 'taux_usd': taux_usd, 'currencies' :currencies, 'inflation_rate' : inflation_rate, 'life_expectancy': life_expectancy}
west_africa_data= pd.DataFrame(my_dict)
#Add row labels
row_labels = [
    "BEN",
    "BFA",
    "CPV",
    "CIV",
    "GMB",
    "GHA",
    "GIN",
    "GNB",
    "LBR",
    "MLI",
    "MRT",
    "NER",
    "NGA",
    "SEN",
    "SLE",
    "TGO"
]
west_africa_data.index= row_labels
#print (west_africa_data.info())
minimum_usd_wage=west_africa_data['minimum_wage']/ west_africa_data['taux_usd']
west_africa_data['minimum_usd_wage']=minimum_usd_wage
colonnes_a_visualiser=[
'minimum_usd_wage',
'inflation_rate',
'unemployment_rate',
'populations',
]
#print("==================================================================")
#print("  ANALYSE DES CORRÉLATIONS ENTRE SALAIRE MINIMUM ET INDICATEURS SOCIO-ÉCONOMIQUES")
#print("==================================================================")
#print(west_africa_data[colonnes_a_visualiser].to_string())
#Lien entre populations et taux de chômage
#print(west_africa_data[['unemployment_rate' ,'populations']])
#Print life expectancy more than 60
le= west_africa_data['life_expectancy']
life_expectancy_high = le > 60.0
#print(west_africa_data[life_expectancy_high])

#print mean and max  
value_mean_ur=  west_africa_data['unemployment_rate'].max()
value_max_le= west_africa_data['life_expectancy'].mean()
#print(value_mean_ur, value_max_le)
#PIB par produit par habitant dans chaque pays
west_africa_data['gdp_people'] =(west_africa_data['gdp_billion_usd'] * 1000000000) / west_africa_data['populations']
#print(west_africa_data['gdp_people'])
#Affichage du graph en barre pour visualisation des pays et  leur population
west_africa_data['pop_millions'] = west_africa_data['populations'] / 1000000
plt.figure(figsize=(10, 6))
barres =plt.bar(west_africa_data.index, west_africa_data['pop_millions'], color= 'Purple')
plt.title("Populations de l'Afrique de l'Ouest par pays en millions")
plt.xlabel('Code pays')
plt.ylabel('Population en million')
plt.yticks(np.arange(0, 250, 5,))
plt.grid(True, linestyle=':', alpha=0.8)
#plt.show()

#Graph scatter nuage de point
west_africa_data['pop_float']= west_africa_data['populations'] / 1000000
#
west_africa_data['areas_float']=west_africa_data['areas'] / 1000
plt.scatter(west_africa_data['areas_float'], west_africa_data['pop_float'], color='skyblue', s=20)
for pays, x, y in zip(west_africa_data.index, west_africa_data['areas_float'], west_africa_data['pop_float']):
    texte_complet = f"{pays} ({x:.1f}k km²)"
    plt.text(x + 15, y, texte_complet, fontsize=9, fontweight='bold')
plt.xlabel('Superficie par pays')
plt.ylabel("Populations en million")
plt.title("Corrélation entre la superficie et la population des pays d'Afrique de l'Ouest")
#plt.show()
west_africa_data.to_csv('donnees_socio_economiques_afrique_ouest.csv', index=True)
