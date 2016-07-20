var ukcounty = ["Please select", "Aberdeenshire", "Moray", "Hertfordshire", "West Midlands", "Warwickshire", "Worcestershire", "Somerset", "Wiltshire", "Lancashire", "West Yorkshire", "North Yorkshire", "Dorset", "Hampshire", "Greater Manchester", "East Sussex", "West Sussex", "Kent", "Bristol", "Belfast", "Co. Down", "Co. Antrim", "Co. Londonderry", "Co. Armagh", "Co. Tyrone", "Co. Fermanagh", "Cumbria", "Cambridgeshire", "Suffolk", "Essex", "Cardiff", "Bridgend", "Rhondda, Cynon, Taff", "Merthyr Tydfil", "The Vale Of Glamorgan", "Caerphilly", "Cheshire", "Flintshire", "Merseyside", "Surrey", "Angus", "Fife", "Derbyshire", "Staffordshire", "Dumfries And Galloway", "Co. Durham", "Tyne & Wear", "South Yorkshire", "East Riding of Yorkshire", "Lincolnshire", "Nottinghamshire", "Greater London", "Midlothian", "East Lothian", "West Lothian", "Scottish Borders", "Falkirk", "Devon", "Cornwall", "Stirlingshire", "Clackmannanshire", "Lanarkshire", "Dunbartonshire", "Argyll And Bute", "Gloucestershire", "Berkshire", "Channel Islands", "Buckinghamshire", "Herefordshire", "Eilean Siar", "Isle Of Man", "Norfolk", "Highland", "Ayrshire", "Orkney Islands", "Perth And Kinross", "Powys", "Leicestershire", "Rutland", "Wrexham", "Denbighshire", "Conwy", "Gwynedd", "Isle Of Anglesey", "Bedfordshire", "Tyne And Wear", "Northumberland", "Northamptonshire", "Monmouthshire", "Newport", "Blaenau Gwent", "Torfaen", "Oxfordshire", "Renfrewshire", "Inverclyde", "Isle Of Wight", "Swansea", "Neath Port Talbot", "Carmarthenshire", "Pembrokeshire", "Ceredigion", "Shropshire", "Isles Of Scilly", "Co Durham"];
var ukcity = ["Please select", "Abbots Langley", "Aberaeron", "Aberconwy", "Aberdar", "Aberdare", "Aberdaugleddau", "Aberdaugleddyf", "Aberdeen", "Aberdovey", "Aberdyfi", "Aberfeldy", "Abergavenny", "Abergele", "Abergwaun", "Aberhonddu", "Aberlour", "Abermo", "Aberpennar", "Abertawe", "Aberteifi", "Abertillery", "Abertyleri", "Aberystwyth", "Abingdon", "Aboyne", "Accrington", "Acharacle", "Achnasheen", "Addlestone", "Airdrie", "Alcester", "Aldeburgh", "Alderley Edge", "Aldershot", "Alexandria", "Alford", "Alfreton", "Alloa", "Alness", "Alnwick", "Alresford", "Alston", "Alton", "Altrincham", "Alva", "Ambleside", "Amersham", "Amlwch", "Ammanford", "Andover", "Annan", "Anstruther", "Antrim", "Appin", "Appleby-in-westmorland", "Arberth", "Arbroath", "Ardgay", "Ardrossan", "Ardvasar", "Arisaig", "Arlesey", "Armagh", "Aros", "Arrochar", "Arthog", "Arundel", "Ascot", "Ashbourne", "Ashby-de-la-zouch", "Ashford", "Ashington", "Ashtead", "Ashton-under-lyne", "Askam-in-furness", "Atherstone", "Attleborough", "Auchterarder", "Augher", "Aughnacloy", "Aviemore", "Avoch", "Axbridge", "Axminster", "Aylesbury", "Aylesford", "Ayr", "Bacup", "Badminton", "Bae Colwyn", "Bagillt", "Bagshot", "Bakewell", "Bala", "Baldock", "Balerno", "Ballachulish", "Ballasalla", "Ballater", "Ballindalloch", "Ballycastle", "Ballyclare", "Ballygrant", "Ballymena", "Ballymoney", "Ballynahinch", "Bamburgh", "Bampton", "Banbridge", "Banbury", "Banchory", "Banff", "Bangor", "Banstead", "Banwell", "Bargod", "Bargoed", "Barking", "Barmouth", "Barnard Castle", "Barnet", "Barnetby", "Barnoldswick", "Barnsley", "Barnstaple", "Barri", "Barrow-in-furness", "Barrow-on-humber", "Barrow-upon-humber", "Barry", "Barton-on-humber", "Barton-upon-humber", "Basildon", "Basingstoke", "Bath", "Bathgate", "Batley", "Battle", "Beaconsfield", "Beaminster", "Beauly", "Beaumaris", "Beaworthy", "Beccles", "Beckenham", "Beckermet", "Bedale", "Bedford", "Bedlington", "Bedworth", "Beith", "Belfast", "Belford", "Bellshill", "Belper", "Belvedere", "Bembridge", "Benfleet", "Berkeley", "Berkhamsted", "Berriedale", "Berwick-upon-tweed", "Betchworth", "Betws-y-coed", "Beverley", "Bewdley", "Bexhill-on-sea", "Bexley", "Bexleyheath", "Bicester", "Bideford", "Biggar", "Biggleswade", "Billericay", "Billingham", "Billinghurst", "Billingshurst", "Bilston", "Bingley", "Birchington", "Birkenhead", "Birmingham", "Bishop Auckland", "Bishop's Stortford", "Bishops Castle", "Bishopton", "Biwmares", "Blackburn", "Blackpool", "Blackwood", "Blaenafon", "Blaenau", "Blaenau Ffestiniog", "Blaenavon", "Blaina", "Blairgowrie", "Blakeney", "Blandford Forum", "Blaydon-on-tyne", "Blyth", "Bo'ness", "Boat Of Garten", "Bodmin", "Bodorgan", "Bognor Regis", "Boldon Colliery", "Bolton", "Boncath", "Bonnybridge", "Bonnyrigg", "Bont-faen", "Bootle", "Bordon", "Borehamwood", "Borth", "Boscastle", "Boston", "Bourne", "Bourne End", "Bournemouth", "Bow Street", "Bowmore", "Brackley", "Bracknell", "Bradford", "Bradford-on-avon", "Braintree", "Brampton", "Brandon", "Braunton", "Breakish", "Brechin", "Brecon", "Brentford", "Brentwood", "Bridge Of Orchy", "Bridge Of Weir", "Bridgend", "Bridgnorth", "Bridgwater", "Bridlington", "Bridport", "Brierley Hill", "Brigg", "Brighouse", "Brighton", "Bristol", "Brixham", "Broadford", "Broadstairs", "Broadstone", "Broadway", "Brockenhurst", "Brodick", "Bromley", "Bromsgrove", "Bromyard", "Brora", "Broseley", "Brough", "Broughton-in-furness", "Broxbourne", "Broxburn", "Bruichladdich", "Bruton", "Bryher", "Brynbuga", "Brynmawr", "Brynteg", "Buckfastleigh", "Buckhurst Hill", "Buckie", "Buckingham", "Buckley", "Bucknell", "Bude", "Budleigh Salterton", "Builth Wells", "Bungay", "Buntingford", "Bures", "Burford", "Burgess Hill", "Burnham-on-crouch", "Burnham-on-sea", "Burnley", "Burntisland", "Burntwood", "Burry Port", "Burton-on-trent", "Bury", "Bury St. Edmunds", "Bury St.edmonds", "Bushey", "Bushmills", "Buxton", "Bwcle", "Caer", "Caerdydd", "Caerffili", "Caerfyrddin", "Caergybi", "Caernarfon", "Caerphilly", "Caersws", "Cairndow", "Caldicot", "Caledon", "Callander", "Callington", "Calne", "Calstock", "Camberley", "Camborne", "Cambridge", "Camelford", "Campbeltown", "Cannock", "Canonbie", "Canterbury", "Canvey Island", "Carbost", "Cardiff", "Cardigan", "Carlisle", "Carluke", "Carmarthen", "Carnforth", "Carnoustie", "Carr Bridge", "Carrbridge", "Carrickfergus", "Carshalton", "Carterton", "Cas-gwent", "Casnewydd", "Castell Newydd Emlyn", "Castell-nedd", "Castle Cary", "Castle Douglas", "Castlebay", "Castlederg", "Castleford", "Castletown", "Castlewellan", "Caterham", "Catterick Garrison", "Ceinewydd", "Cemaes Bay", "Cemais", "Cfieff", "Chalfont St. Giles", "Chard", "Chatham", "Chathill", "Chatteris", "Cheadle", "Cheddar", "Chelmsford", "Cheltenham", "Chepstow", "Chertsey", "Chesham", "Chessington", "Chester", "Chester Le Street", "Chesterfield", "Chichester", "Chigwell", "Chinnor", "Chippenham", "Chipping Campden", "Chipping Norton", "Chislehurst", "Choppington", "Chorley", "Christchurch", "Chulmleigh", "Church Stretton", "Cilgeti", "Cinderford", "Cirencester", "Clackmannan", "Clacton-on-sea", "Clarbeston Road", "Cleator", "Cleator Moor", "Cleckheaton", "Cleethorpes", "Clevedon", "Clitheroe", "Clogher", "Clunderwen", "Clydebank", "Clynderwen", "Coalville", "Coatbridge", "Cobham", "Cockburnspath", "Cockermouth", "Coed-duon", "Colchester", "Coldstream", "Coleford", "Coleraine", "Colintraive", "Colne", "Colwyn Bay", "Colyton", "Congleton", "Coniston", "Consett", "Conwy", "Cookstown", "Corbridge", "Corby", "Cornhill-on-tweed", "Corrour", "Corsham", "Corwen", "Cottingham", "Coulsdon", "Coventry", "Cowbridge", "Cowdenbeath", "Cowes", "Cradley Heath", "Craigavon", "Craighouse", "Cramlington", "Cranbrook", "Cranleigh", "Craven Arms", "Crawley", "Crediton", "Crewe", "Crewkerne", "Crianlarich", "Criccieth", "Cricieth", "Crickhowell", "Crieff", "Croesoswallt", "Cromarty", "Cromer", "Crook", "Crowborough", "Crowthorne", "Croydon", "Crucywel", "Crughywel", "Crumlin", "Crymych", "Cullompton", "Cumnock", "Cupar", "Currie", "Cwmbran", "Cydweli", "Cyffordd Llandudno", "Dagenham", "Dalbeattie", "Dalkeith", "Dalmally", "Dalry", "Dalton-in-furness", "Dalwhinnie", "Darlington", "Dartford", "Dartmouth", "Darvel", "Darwen", "Daventry", "Dawlish", "Deal", "Deeside", "Delabole", "Denbigh", "Denny", "Derby", "Dereham", "Devizes", "Dewsbury", "Didcot", "Dinas Powys", "Dinbych", "Dinbych-y-pysgod", "Dingwall", "Diss", "Doc Penfro", "Dolgellau", "Dollar", "Dolwyddelan", "Donaghadee", "Doncaster", "Dorchester", "Dorking", "Dornoch", "Douglas", "Doune", "Dover", "Downham Market", "Downpatrick", "Driffield", "Droitwich", "Dromore", "Dronfield", "Drybrook", "Dudley", "Dukinfield", "Dulas", "Dulverton", "Dumbarton", "Dumfries", "Dunbar", "Dunbeath", "Dunblane", "Dundee", "Dunfermline", "Dungannon", "Dunkeld", "Dunmow", "Dunoon", "Duns", "Dunstable", "Dunvegan", "Durham", "Dursley", "Dyffryn Ardudwy", "Dymock", "Earlston", "East Boldon", "East Cowes", "East Grinstead", "East Linton", "East Molesey", "Eastbourne", "Eastleigh", "Ebbw Vale", "Edenbridge", "Edgware", "Edinburgh", "Egham", "Egremont", "Elgin", "Elland", "Ellesmere", "Ellesmere Port", "Ellon", "Ely", "Emsworth", "Enfield", "Enniskillen", "Epping", "Epsom", "Erith", "Erskine", "Esher", "Etchingham", "Evanton", "Evesham", "Exeter", "Exmouth", "Eye", "Eyemouth", "Fairbourne", "Fairford", "Fakenham", "Falkirk", "Falmouth", "Fareham", "Faringdon", "Farnborough", "Farnham", "Faversham", "Felixstowe", "Feltham", "Ferndale", "Ferndown", "Ferryhill", "Ferryside", "Filey", "Fishguard", "Fivemiletown", "Fleet", "Fleetwood", "Flint", "Fochabers", "Folkestone", "Fordingbridge", "Forest Row", "Forfar", "Forres", "Forsinard", "Fort Augustus", "Fort William", "Fortrose", "Fowey", "Fraserburgh", "Freshwater", "Frinton-on-sea", "Frizington", "Frodsham", "Frome", "Gaerwen", "Gainsborough", "Gairloch", "Galashiels", "Galston", "Garn Dolbenmaen", "Garndolbenmaen", "Garve", "Gateshead", "Gatwick", "Gerrards Cross", "Gillingham", "Girvan", "Glan-y-fferi", "Glannau Dyfrdwy", "Glasgow", "Glastonbury", "Glenfinnan", "Glenrothes", "Glogue", "Glossop", "Gloucester", "Glynebwy", "Glynrhedyn", "Godalming", "Godstone", "Golspie", "Goodwick", "Goole", "Gordon", "Gorebridge", "Gosport", "Gourock", "Grange-over-sands", "Grangemouth", "Grantham", "Grantown-on-spey", "Gravesend", "Grays", "Great Missenden", "Great Yarmouth", "Greenford", "Greenhithe", "Greenock", "Gretna", "Grimsby", "Guernsey", "Guildford", "Guisborough", "Gullane", "Gunnislake", "Gwdig", "Habrough", "Haddington", "Hailsham", "Halesowen", "Halesworth", "Halifax", "Halkirk", "Halstead", "Haltwhistle", "Hamilton", "Hampton", "Harlech", "Harleston", "Harlow", "Harpenden", "Harris", "Harrogate", "Harrow", "Hartfield", "Hartlepool", "Harwich", "Haslemere", "Hassocks", "Hastings", "Hatfield", "Havant", "Haverfordwest", "Haverhill", "Hawes", "Hawick", "Hayes", "Hayle", "Hayling Island", "Haywards Heath", "Heanor", "Heathfield", "Hebburn", "Hebden Bridge", "Heckmondwike", "Helensburgh", "Helmsdale", "Helston", "Hemel Hempstead", "Hendy-gwyn", "Henfield", "Hengoed", "Henley-in-arden", "Henley-on Thames", "Henley-on-thames", "Henlow", "Hereford", "Heriot", "Herne Bay", "Hertford", "Hessle", "Hexham", "Heywood", "High Peak", "High Wycombe", "Highbridge", "Hillsborough", "Hinckley", "Hindhead", "Hinton St. George", "Hitchin", "Hockley", "Hoddesdon", "Holmfirth", "Holmrook", "Holsworthy", "Holt", "Holyhead", "Holywell", "Holywood", "Honiton", "Hook", "Hope Valley", "Horley", "Horncastle", "Hornchurch", "Hornsea", "Horsham", "Houghton Le Spring", "Hounslow", "Hove", "Huddersfield", "Hull", "Humbie", "Hungerford", "Hunstanton", "Huntingdon", "Huntly", "Hwlffordd", "Hyde", "Hythe", "Ibstock", "Ilford", "Ilfracombe", "Ilkeston", "Ilkley", "Ilminster", "Immingham", "Ingatestone", "Innerleithen", "Insch", "Inveraray", "Invergarry", "Invergordon", "Inverkeithing", "Inverness", "Inverurie", "Ipswich", "Irvine", "Isle Of Arran", "Isle Of Barra", "Isle Of Benbecula", "Isle Of Bute", "Isle Of Canna", "Isle Of Coll", "Isle Of Colonsay", "Isle Of Cumbrae", "Isle Of Eigg", "Isle Of Gigha", "Isle Of Harris", "Isle Of Iona", "Isle Of Islay", "Isle Of Jura", "Isle Of Lewis", "Isle Of Man", "Isle Of Mull", "Isle Of North Uist", "Isle Of Rhum", "Isle Of Rhum Dummy", "Isle Of Rum", "Isle Of Scalpay", "Isle Of Skye", "Isle Of South Uist", "Isle Of Tiree", "Isle Ornsay", "Isles Of Scilly", "Isleworth", "Iver", "Ivybridge", "Jarrow", "Jedburgh", "Jersey", "Johnstone", "Juniper Green", "Keighley", "Keith", "Kelso", "Kelty", "Kendal", "Kenilworth", "Kenley", "Keston", "Keswick", "Kettering", "Kidderminster", "Kidlington", "Kidwelly", "Kilbirnie", "Kilgetty", "Killin", "Kilmacolm", "Kilmarnock", "Kilwinning", "Kinbrace", "King's Lynn", "Kings Langley", "Kingsbridge", "Kingston Upon Thames", "Kingswinford", "Kington", "Kingussie", "Kinlochleven", "Kinross", "Kirk Michael", "Kirkby Stephen", "Kirkby-in-furness", "Kirkcaldy", "Kirkcudbright", "Kirkliston", "Kirknewton", "Kirkwall", "Kirriemuir", "Knaresborough", "Knebworth", "Knighton", "Knottingley", "Knutsford", "Kyle", "Kyleakin", "Lairg", "Lampeter", "Lanark", "Lancaster", "Lancing", "Langholm", "Langport", "Lanwrtyd", "Larbert", "Largs", "Larkhall", "Larne", "Lasswade", "Latheron", "Lauder", "Launceston", "Laurencekirk", "Laxey", "Leamington Spa", "Leatherhead", "Lechlade", "Ledbury", "Lee-on-the-solent", "Leeds", "Leek", "Leicester", "Leigh", "Leigh-on-sea", "Leighton Buzzard", "Leiston", "Leominster", "Lerwick", "Letchworth", "Letchworth Garden City", "Leven", "Leverburgh", "Lewes", "Leyburn", "Leyland", "Lichfield", "Lifton", "Lightwater", "Limavady", "Lincoln", "Lingfield", "Linlithgow", "Liphook", "Lisburn", "Liskeard", "Liss", "Littleborough", "Littlehampton", "Liverpool", "Liversedge", "Livingston", "Llan-non", "Llanandras", "Llanarth", "Llanbedr", "Llanbedr Pont Steffan", "Llanbedrgoch", "Llanbryn-mair", "Llanbrynmair", "Llandeilo", "Llandinam", "Llandovery", "Llandrindod", "Llandrindod Wells", "Llandudno", "Llandudno Junction", "Llandysul", "Llanelli", "Llanelwedd", "Llanelwy", "Llanerch-y-medd", "Llanerchymedd", "Llanfair-ym-muallt", "Llanfairfechan", "Llanfairpwllgwyngyll", "Llanfechain", "Llanfyllin", "Llanfyrnach", "Llangadog", "Llangamarch", "Llangammarch Wells", "Llangefni", "Llangollen", "Llanidloes", "Llanilltud Fawr", "Llannarth", "Llanon", "Llanrhystud", "Llanrhystyd", "Llanrwst", "Llansanffraid", "Llansanffraid-ym-mechain", "Llansanffraidymmechain", "Llansantffraid", "Llantwit Major", "Llanwrda", "Llanwrtyd Wells", "Llanybydder", "Llanymddyfri", "Llanymynech", "Llwyngwril", "Loanhead", "Lochailort", "Lochboisdale", "Lochearnhead", "Lochgelly", "Lochgilphead", "Lochmaddy", "Lochwinnoch", "Lockerbie", "London", "Londonderry", "Longfield", "Longhope", "Longniddry", "Looe", "Lossiemouth", "Lostwithiel", "Loughborough", "Loughton", "Louth", "Lowestoft", "Ludlow", "Luton", "Lutterworth", "Lybster", "Lydbrook", "Lydbury North", "Lydney", "Lyme Regis", "Lymington", "Lymm", "Lyndhurst", "Lynmouth", "Lynton", "Lytham St. Annes", "Mablethorpe", "Macclesfield", "Macduff", "Machynlleth", "Maesteg", "Maghera", "Magherafelt", "Maidenhead", "Maidstone", "Maldon", "Mallaig", "Malmesbury", "Malpas", "Malton", "Malvern", "Manchester", "Manningtree", "Mansfield", "Marazion", "March", "Margate", "Marianglas", "Market Deeping", "Market Drayton", "Market Harborough", "Market Rasen", "Markfield", "Marlborough", "Marlow", "Martock", "Maryport", "Matlock", "Mauchline", "Maybole", "Mayfield", "Meifod", "Melksham", "Melrose", "Melton Constable", "Melton Mowbray", "Menai Bridge", "Menstrie", "Merriott", "Merthyr Tudful", "Merthyr Tydfil", "Mexborough", "Middlesbrough", "Middlewich", "Midhurst", "Milford Haven", "Millom", "Millport", "Milltimber", "Milnthorpe", "Milton Keynes", "Mindrum", "Minehead", "Mirfield", "Mitcham", "Mitcheldean", "Moelfre", "Moffat", "Mold", "Monmouth", "Montacute", "Montgomery", "Montrose", "Moor Row", "Morden", "Morecambe", "Moreton-in-marsh", "Morpeth", "Motherwell", "Mountain Ash", "Much Hadham", "Much Wenlock", "Muir Of Ord", "Munlochy", "Musselburgh", "Nairn", "Nantwich", "Narberth", "Neath", "Nelson", "Neston", "Nethy Bridge", "New Malden", "New Milton", "New Quay", "New Romney", "New Tredegar", "Newark", "Newbiggin-by-the-sea", "Newbridge", "Newbury", "Newcastle", "Newcastle Emlyn", "Newcastle Upon Tyne", "Newcastleton", "Newent", "Newhaven", "Newmarket", "Newmilns", "Newnham", "Newport", "Newport Pagnell", "Newport-on-tay", "Newquay", "Newry", "Newton Abbot", "Newton Aycliffe", "Newton Stewart", "Newton-le-willows", "Newtonmore", "Newtown", "Newtownabbey", "Newtownards", "Normanton", "North Berwick", "North Ferriby", "North Shields", "North Tawton", "North Walsham", "Northallerton", "Northampton", "Northolt", "Northwich", "Northwood", "Norwich", "Nottingham", "Nuneaton", "Oakham", "Oban", "Okehampton", "Oldbury", "Oldham", "Olney", "Omagh", "Ongar", "Orkney", "Ormskirk", "Orpington", "Ossett", "Oswestry", "Otley", "Ottery St. Mary", "Oxford", "Oxted", "Padstow", "Paignton", "Paisley", "Par", "Pathhead", "Peacehaven", "Peebles", "Peel", "Pembroke", "Pembroke Dock", "Pen-y-bont Ar Ogwr", "Penarth", "Pencader", "Penfro", "Penicuik", "Penmaenmawr", "Penrhyndeudraeth", "Penrith", "Penryn", "Pentraeth", "Pentre", "Penysarn", "Penzance", "Perranporth", "Pershore", "Perth", "Peterborough", "Peterculter", "Peterhead", "Peterlee", "Petersfield", "Petworth", "Pevensey", "Pewsey", "Pickering", "Pinner", "Pitlochry", "Plockton", "Plymouth", "Polegate", "Pont-y-clun", "Pont-y-pwl", "Pontefract", "Pontyclun", "Pontypool", "Pontypridd", "Poole", "Port Askaig", "Port Charlotte", "Port Dinorwic", "Port Ellen", "Port Erin", "Port Glasgow", "Port Isaac", "Port St. Mary", "Port Talbot", "Porth", "Porth Tywyn", "Porthaethwy", "Porthcawl", "Porthmadog", "Portland", "Portnahaven", "Portree", "Portrush", "Portsmouth", "Portstewart", "Potters Bar", "Poulton-le-fylde", "Prenton", "Prenton Do", "Prescot", "Prestatyn", "Presteigne", "Preston", "Prestonpans", "Prestwick", "Princes Risborough", "Prudhoe", "Pudsey", "Pulborough", "Purfleet", "Purley", "Pwllheli", "Queenborough", "Radlett", "Radstock", "Raglan", "Rainham", "Raleigh", "Ramsey", "Ramsgate", "Rannoch Station", "Ravenglass", "Rayleigh", "Reading", "Redcar", "Redditch", "Redhill", "Redruth", "Reigate", "Renfrew", "Retford", "Rhaedr Gwy", "Rhaglan", "Rhayader", "Rhosgoch", "Rhosneigr", "Rhuthun", "Rhydaman", "Rhyl", "Rhymney", "Rhymni", "Richmond", "Rickmansworth", "Riding Mill", "Ringwood", "Ripley", "Ripon", "Robertsbridge", "Rochdale", "Rochester", "Rochford", "Rogart", "Romford", "Romney Marsh", "Romsey", "Rosewell", "Roslin", "Ross-on-wye", "Rossendale", "Rotherham", "Rothesay", "Rowland's Castle", "Rowlands Gill", "Rowley Regis", "Roy Bridge", "Royston", "Ruardean", "Rugby", "Rugeley", "Ruislip", "Runcorn", "Rushden", "Ruthin", "Ryde", "Rye", "Ryton", "Saffron Walden", "Salcombe", "Sale", "Salford", "Salisbury", "Saltash", "Saltburn-by-the-sea", "Saltcoats", "Sandbach", "Sandhurst", "Sandown", "Sandringham", "Sandwich", "Sandy", "Sanquhar", "Saundersfoot", "Sawbridgeworth", "Saxmundham", "Scarborough", "Scarinish", "Sconser", "Scunthorpe", "Seaford", "Seaham", "Seahouses", "Seascale", "Seaton", "Seaview", "Sedbergh", "Selby", "Selkirk", "Settle", "Sevenoaks", "Shaftesbury", "Shanklin", "Sheerness", "Sheffield", "Shefford", "Shepperton", "Shepton Mallet", "Sherborne", "Sheringham", "Shetland", "Shifnal", "Shildon", "Shipley", "Shipston-on-stour", "Shoreham-by-sea", "Shotts", "Shrewsbury", "Sidcup", "Sidmouth", "Sittingbourne", "Skegness", "Skelmersdale", "Skelmorlie", "Skene", "Skipton", "Sleaford", "Slough", "Smethwick", "Snodland", "Solihull", "Somerton", "South Brent", "South Croydon", "South Molton", "South Ockendon", "South Petherton", "South Queensferry", "South Shields", "South Wirral", "Southall", "Southam", "Southampton", "Southend-on-sea", "Southminster", "Southport", "Southsea", "Southwell", "Southwold", "Sowerby Bridge", "Spalding", "Spean Bridge", "Spennymoor", "Spilsby", "St Agnes", "St Austell", "St Helens", "St Martins", "St Marys", "St. Agnes", "St. Albans", "St. Andrews", "St. Asaph", "St. Austell", "St. Bees", "St. Columb", "St. Helens", "St. Ives", "St. Leonards-on-sea", "St. Martins", "St. Marys", "St. Neots", "St.mary", "St.neots", "Stafford", "Staines", "Stalybridge", "Stamford", "Stanford-le-hope", "Stanley", "Stanmore", "Stansted", "Stevenage", "Stevenston", "Steyning", "Stirling", "Stockbridge", "Stockport", "Stocksfield", "Stockton-on-tees", "Stoke-on-trent", "Stoke-sub-hamdon", "Stone", "Stonehaven", "Stonehouse", "Stornoway", "Stourbridge", "Stourport-on-severn", "Stowmarket", "Strabane", "Stranraer", "Stratford-upon-avon", "Strathaven", "Strathcarron", "Strathdon", "Strathpeffer", "Street", "Strome Ferry", "Stromness", "Stroud", "Struan", "Studley", "Sturminster Newton", "Sudbury", "Sunbury-on-thames", "Sunderland", "Sunthorpe", "Surbiton", "Sutton", "Sutton Coldfield", "Sutton-in-ashfield", "Swadlincote", "Swadlingcote", "Swaffham", "Swanage", "Swanley", "Swanscombe", "Swansea", "Swindon", "Tadcaster", "Tadley", "Tadworth", "Tain", "Tal-y-bont", "Talsarnau", "Talybont", "Tamworth", "Tarbert", "Tarporley", "Tarskavaig", "Taunton", "Tavistock", "Taynuilt", "Tayport", "Teangue", "Teddington", "Teignmouth", "Telford", "Templecombe", "Tempnewport", "Tenbury Wells", "Tenby", "Tenterden", "Tetbury", "Tewkesbury", "Thame", "Thames Ditton", "Thatcham", "Thetford", "Thirsk", "Thornhill", "Thornton Heath", "Thornton-cleveleys", "Thurso", "Tidworth", "Tighnabruaich", "Tilbury", "Tillicoultry", "Tintagel", "Tipton", "Tiverton", "Todmorden", "Tomatin", "Tonbridge", "Tonypandy", "Torpoint", "Torquay", "Torrington", "Totland Bay", "Totnes", "Towcester", "Tranent", "Tredegar", "Tredegyr", "Tredegyr Newydd", "Tref-y-clawdd", "Trefaldwyn", "Trefdraeth", "Treffynnon", "Trefriw", "Trefyclo", "Trefynwy", "Tregaron", "Treharris", "Treorchy", "Treorci", "Tresco", "Trimdon Station", "Tring", "Troon", "Trowbridge", "Truro", "Tunbridge Wells", "Turriff", "Twickenham", "Ty Croes", "Tycroes", "Tyn-y-gongl", "Tywyn", "Uckfield", "Ulceby", "Ullapool", "Ulverston", "Umberleigh", "Upminster", "Usk", "Uttoxeter", "Uxbridge", "Ventnor", "Verwood", "Virginia Water", "Wadebridge", "Wadhurst", "Wakefield", "Walkerburn", "Wallasey", "Wallingford", "Wallington", "Wallsend", "Walsall", "Walsingham", "Waltham Abbey", "Waltham Cross", "Walton On The Naze", "Walton-on-thames", "Wantage", "Ware", "Wareham", "Warley", "Warlingham", "Warminster", "Warrington", "Warwick", "Washington", "Watchet", "Waterlooville", "Watford", "Watlington", "Wedmore", "Wednesbury", "Welling", "Wellingborough", "Wellington", "Wells", "Wells-next-the-sea", "Welshpool", "Welwyn", "Welwyn Garden City", "Wembley", "Wemyss Bay", "West Bromwich", "West Byfleet", "West Calder", "West Drayton", "West Kilbride", "West Linton", "West Malling", "West Molesey", "West Wickham", "Westbury", "Westbury-on-severn", "Westcliff-on-sea", "Westerham", "Westgate-on-sea", "Westhill", "Weston-super-mare", "Wetherby", "Weybridge", "Weymouth", "Whitby", "Whitchurch", "Whitehaven", "Whitland", "Whitley Bay", "Whitstable", "Whyteleafe", "Wick", "Wickford", "Widnes", "Wigan", "Wigston", "Wigton", "Willenhall", "Wilmslow", "Wimborne", "Wincanton", "Winchelsea", "Winchester", "Windermere", "Windlesham", "Windsor", "Wingate", "Winkleigh", "Winscombe", "Winsford", "Wirral", "Wisbech", "Wishaw", "Witham", "Withernsea", "Witney", "Woking", "Wokingham", "Wolverhampton", "Woodbridge", "Woodford Green", "Woodhall Spa", "Woodstock", "Woolacombe", "Wooler", "Worcester", "Worcester Park", "Workington", "Worksop", "Worthing", "Wotton-under-edge", "Wrecsam", "Wrexham", "Wylam", "Wymondham", "Y Bala", "Y Barri", "Y Bontfaen", "Y Borth", "Y Drefnewydd", "Y Drenewydd", "Y Felinheli", "Y Fenni", "Y Fflint", "Y Friog", "Y Glog", "Y Rhyl", "Y Trallwng", "Yarm", "Yarmouth", "Yateley", "Yelverton", "Yeovil", "York", "Yr Wyddgrug", "Ystrad Meurig"];
var engcountries = ["Please select", "Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Caribbean Netherlands ", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Congo, Democratic Republic of", "Cook Islands", "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Curaçao", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "English Name", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and McDonald Islands", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Lao People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Ĺland Islands", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "North Korea", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Palestinian Territory, Occupied", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Barthélemy", "Saint Helena", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Saint-Martin (France)", "Saint-Martin (Pays-Bas)", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia (Slovak Republic)", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "South Korea", "South Sudan", "Spain", "Sri Lanka", "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "The Netherlands", "Timor-Leste", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican", "Venezuela", "Vietnam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Zambia", "Zimbabwe"];
var flag = false;
function checkbadwords(fieldid) {

    var reBadWords = /ahole|anus|ash0le|ash0les|asholes|ass|Ass Monkey|Assface|assh0le|assh0lez|asshole|assholes|assholz|asswipe|azzhole|bassterds|bastard|bastards|bastardz|basterds|basterdz|Biatch|bitch|bitches|Blow Job|boffing|butthole|buttwipe|c0ck|c0cks|c0k|Carpet Muncher|cawk|cawks|Clit|cnts|cntz|cock|cockhead|cock-head|cocks|CockSucker|cock-sucker|crap|cum|cunt|cunts|cuntz|dick|dild0|dild0s|dildo|dildos|dilld0|dilld0s|dominatricks|dominatrics|dominatrix|dyke|enema|f u c k|f u c k e r|fag|fag1t|faget|fagg1t|faggit|faggot|fagit|fags|fagz|faig|faigs|fart|flipping the bird|fuck|fucker|fuckin|fucking|fucks|Fudge Packer|fuk|Fukah|Fuken|fuker|Fukin|Fukk|Fukkah|Fukken|Fukker|Fukkin|g00k|gay|gayboy|gaygirl|gays|gayz|God-damned|h00r|h0ar|h0re|hells|hoar|hoor|hoore|jackoff|jap|japs|jerk-off|jisim|jiss|jizm|jizz|knob|knobs|knobz|kunt|kunts|kuntz|Lesbian|Lezzian|Lipshits|Lipshitz|masochist|masokist|massterbait|masstrbait|masstrbate|masterbaiter|masterbate|masterbates|Motha Fucker|Motha Fuker|Motha Fukkah|Motha Fukker|Mother Fucker|Mother Fukah|Mother Fuker|Mother Fukkah|Mother Fukker|mother-fucker|Mutha Fucker|Mutha Fukah|Mutha Fuker|Mutha Fukkah|Mutha Fukker|n1gr|nastt|nigger;|nigur;|niiger;|niigr;|orafis|orgasim;|orgasm|orgasum|oriface|orifice|orifiss|packi|packie|packy|paki|pakie|paky|pecker|peeenus|peeenusss|peenus|peinus|pen1s|penas|penis|penis-breath|penus|penuus|Phuc|Phuck|Phuk|Phuker|Phukker|polac|polack|polak|Poonani|pr1c|pr1ck|pr1k|pusse|pussee|pussy|puuke|puuker|queer|queers|queerz|qweers|qweerz|qweir|recktum|rectum|retard|sadist|scank|schlong|screwing|semen|sex|sexy|Sh!t|sh1t|sh1ter|sh1ts|sh1tter|sh1tz|shit|shits|shitter|Shitty|Shity|shitz|Shyt|Shyte|Shytty|Shyty|skanck|skank|skankee|skankey|skanks|Skanky|slut|sluts|Slutty|slutz|son-of-a-bitch|tit|turd|va1jina|vag1na|vagiina|vagina|vaj1na|vajina|vullva|vulva|w0p|wh00r|wh0re|whore|xrated|xxx|b!+ch|bitch|blowjob|clit|arschloch|fuck|shit|ass|asshole|b!tch|b17ch|b1tch|bastard|bi+ch|boiolas|buceta|c0ck|cawk|chink|cipa|clits|cock|cum|cunt|dildo|dirsa|ejakulate|fatass|fcuk|fuk|fux0r|hoer|hore|jism|kawk|l3itch|l3i+ch|lesbian|masturbate|masterbat|masterbat3|motherfucker|s.o.b.|mofo|nazi|nigga|nigger|nutsack|phuck|pimpis|pusse|pussy|scrotum|sh!t|shemale|shi+|sh!+|slut|smut|teets|tits|boobs|b00bs|teez|testical|testicle|titt|w00se|jackoff|wank|whoar|whore|damn|dyke|fuck|shit|@$$|amcik|andskota|arse|assrammer|ayir|bi7ch|bitch|bollock|breasts|butt-pirate|cabron|cazzo|chraa|chuj|Cock|cunt|d4mn|daygo|dego|dick|dike|dupa|dziwka|ejackulate|Ekrem|Ekto|enculer|faen|fag|fanculo|fanny|feces|feg|Felcher|ficken|fitt|Flikker|foreskin|Fotze|Fu|fuk|futkretzn|gay|gook|guiena|h0r|h4x0r|hell|helvete|hoer|honkey|Huevon|hui|injun|jizz|kanker|kike|klootzak|kraut|knulle|kuk|kuksuger|Kurac|kurwa|kusi|kyrpa|lesbo|mamhoon|masturbat|merd|mibun|monkleigh|mouliewop|muie|mulkku|muschi|nazis|nepesaurio|nigger|orospu|paska|perse|picka|pierdol|pillu|pimmel|piss|pizda|poontsee|poop|porn|p0rn|pr0n|preteen|pula|pule|puta|puto|qahbeh|queef|rautenberg|schaffer|scheiss|schlampe|schmuck|screw|sh!t|sharmuta|sharmute|shipal|shiz|skribz|skurwysyn|sphencter|spic|spierdalaj|splooge|suka|b00b|testicle|titt|twat|vittu|wank|wetback|wichser|wop|yed|zabourah/gi;


    if ($(fieldid).val().match(reBadWords) || $(fieldid).val().length < 3) {
        $(fieldid).parent().find('.field-error__validation-message').html('Invalid Entry Please Check');
        $(fieldid).parent().find('.field-error__validation-message').fadeIn();
        addError($(fieldid));
        return false;
    } else {
        addSuccess(fieldid);
        $(fieldid).parent().find('.field-error__validation-message').fadeOut();
        return true;
    }
}
function addaddressfields() {
    genhtml = '';
    // first Line
    genhtml +=
        '<div class="form-group">' +
        '<label class="col-md-4 control-label for="addressmx">Address:</label>' +
        '<input name="addressmx" style="border: 0;background: none;box-shadow: none; padding: 0;  padding-left: 4px;  padding-bottom: 2px;" type="text" disabled="disabled"  class="form-control input-md" id="addressmx" lpval="required">' +
        '</div>';


    genhtml +=
        '<div class="form-group">' +
        '<select style="border: 0;background: none;box-shadow: none; padding: 0;padding-bottom: 2px;-webkit-appearance: none;-moz-appearance: none;appearance: none;" type="text" disabled="disabled"   id="townselector" name="townselector" class="form-control input-md" lpval="required">' +
        '</select>' +
        '</div>';


    genhtml +=
        '<div class="form-group">' +
        '<div class="col-md-4">' +
        '<select style="border: 0;background: none;box-shadow: none; padding: 0;padding-bottom: 2px;-webkit-appearance: none;-moz-appearance: none;appearance: none;" type="text" disabled="disabled" id="countyselector" name="countyselector" class="form-control" lpval="required">' +
        '</select>' +
        '</div>' +
        '</div>';

    genhtml +=
        '<div class="form-group">' +
        '<div class="col-md-4">' +
        '<select style="border: 0;background: none;box-shadow: none; padding: 0;padding-bottom: 2px;-webkit-appearance: none;-moz-appearance: none;appearance: none;" type="text" disabled="disabled" id="countryselector" name="countryselector" class="form-control" lpval="required">' +
        '</select>' +
        '</div>' +
        '</div>';

    $(postcodelookupplacer).html(genhtml);
    $.each(ukcounty, function (key, value) {

        if (value == "Please select") {
            $('#countyselector').append($("<option></option>").attr("value", '').text(value));
            addred();
        } else {
            hideBox();
            $('#countyselector').append($("<option></option>").attr("value", value).text(value));
        }

    });
    $.each(ukcity, function (key, value) {

        if (value == "Please select") {
            $('#townselector').append($("<option></option>").attr("value", '').text(value));
            addred();
        } else {
            hideBox();
            $('#townselector').append($("<option></option>").attr("value", value).text(value));
        }

    });
    $.each(engcountries, function (key, value) {

        if (value == "Please select") {
            $('#countryselector').append($("<option></option>").attr("value", '').text(value));
            addred();
        } else {
            hideBox();
            $('#countryselector').append($("<option></option>").attr("value", value).text(value));
        }


    });
}
function addGreen() {
    $('#postcode').removeClass("alert-error");
    $('#postcode').addClass("alert-success");
    $('#fulladdress input, #fulladdress select').removeClass("alert-error");
    $('#fulladdress input, #fulladdress select').addClass("alert-success");
}
function addred() {
    $('#selectedaddress').addClass("alert-error");
    $('#selectedaddress').removeClass("alert-success");
}
function addpostcodesellect() {
    hideBox();
    $('#searchpostcode').after('<select name="selectedaddress" id="selectedaddress" class="form-control input-md" style="display:none;"></select>');

}


function hideBox() {
    $('#postcode').parent().find('.field-error__validation-message').hide();
}
//functions
var postcodes = [];


var selectaddress = function () {
    $("#selectedaddress").change(function () {
        var selectedAddress = $('#selectedaddress').val();
        postcodes[selectedAddress].line1 = postcodes[selectedAddress].line1.replace('|', '');
        postcodes[selectedAddress].line1 = postcodes[selectedAddress].line1.replace('/', ' ');
        postcodes[selectedAddress].line2 = postcodes[selectedAddress].line2.replace('|', '');
        postcodes[selectedAddress].line2 = postcodes[selectedAddress].line2.replace('/', ' ');
        postcodes[selectedAddress].line3 = postcodes[selectedAddress].line3.replace('|', '');
        postcodes[selectedAddress].line3 = postcodes[selectedAddress].line3.replace('/', ' ');

        postcodes[selectedAddress].premise = postcodes[selectedAddress].premise.replace('|', '');
        postcodes[selectedAddress].premise = postcodes[selectedAddress].premise.replace('/', ' ');

        $("#addressmx").val(postcodes[selectedAddress].premise);
        $("#townselector").val(postcodes[selectedAddress].town);
        $("#countyselector").val(postcodes[selectedAddress].county);
        $("#countryselector").val('United Kingdom');

        $(postcodelookupplacer).show();
        $('#selectedaddress').hide();
        addGreen();
    });
};

function getaddresses() {
    $.ajax({
        dataType: "jsonp",
        type: 'post',
        url: "http://www.e-win.org.uk/validate.php?type=postcode&callback=?",
        data: 'code=' + $("#postcode").val(),
        success: function (result) {
            $("#selectorholder").hide();
            $(postcodelookupplacer).hide();


            var items = [];
            postcodes = result;

            items.push('<option selected="" value="">Please select</option>');

            $.each(result, function (key, val) {
                val.premise = val.premise.replace('|', '');
                val.premise = val.premise.replace('/', ' ');
                items.push('<option  value="' + key + '">' + val.premise + '</option>');
            });

            $('#selectedaddress').html(items.join(''));
            //$('<select/>', {'id': 'adrlist', 'class' : 'required address1' , 'tabindex': '9',html: items.join('')}).appendTo('#selectorholder');

            $("#selectedaddress").show();
            selectaddress();
        },
        error: function (result) {

            $("#addressmx").val('');
            $("#townselector").val('');
            $("#countyselector").val('');

        }

    });
}

function displayErrors(items) {
    var errhtml = '';

    $.each(items, function (key, value) {
        errhtml += key + "| Val:" + value + "<br>";
    });

    $("#" + errrodisp).html(errhtml);
}

function displayFieldErrors(items) {
    var errhtml = '';
    $('input,select').removeClass("alert-error");
    $('input,select').addClass("alert-success");
    $('input,select').parent().find('.field-error__validation-message').fadeOut();
    $.each(items, function (key, value) {
        fieldname = $('<div></div>').append(value).find('span').html();


        if (fieldname == 'Title') {
            fieldid = title_inputid;
        }
        if (fieldname == 'Name') {
            fieldid = firstname_inputid;
        }
        if (fieldname == 'Surname') {
            fieldid = surname_inputid;
        }
        if (fieldname == 'Telephone') {
            fieldid = phone_inputid;
        }
        if (fieldname == 'Email') {

            fieldid = email_inputid;
        }
        if (fieldname == 'Postcode') {
            fieldid = postcode_inputid;
        }
        if (fieldname == 'Terms') {
            fieldid = termsandcons_inputid;
        }
        if (fieldname == 'Address') {
            fieldid = '#addressmx';
        }
        if (fieldname == 'Town') {
            fieldid = '#townselector';
        }
        if (fieldname == 'County') {
            fieldid = '#countyselector';
        }
        if (fieldname == 'Country') {
            fieldid = '#countryselector';
        }
        if (fieldname == 'Dob') {
            fieldid = '' + dobday_inputid + ',' + dobmonth_inputid + ',' + dobyear_inputid + '';
        }

        $(fieldid).removeClass("alert-success");
        $(fieldid).addClass("alert-error");
        $(fieldid).parent().find('.field-error__validation-message').fadeIn();
        $(fieldid).parent().find('.field-error__validation-message').html(value);
        if ($('#selectedaddress').val() == '') {
            $('#selectedaddress').removeClass("alert-success");
            $('#selectedaddress').addClass("alert-error");
        } else {
            $('.input-with-icon').find('.field-error__validation-message').hide();
        }
        if ($("#terms").is(':checked')) {
            $("#terms").parent().find('span').css('color', 'green'); // checked
        } else {
            $("#terms").parent().find('span').css('color', 'red');  // unchecked
        }
        errhtml += key + "| Val:" + fieldname + "|" + fieldid + "|" + '' + "<br>";
    });

    //$("#" + errrodisp).html(errhtml);
}
function getextrafieds() {
    var extralist = '{"sid":"' + SID + '",';

    $(".extrafieldsmx").each(function () {
        if (typeof $(this).attr('id') != 'undefined') {
            extrafieldname = $(this).attr('id');
            extralist += '"' + extrafieldname + '":' + '"' + getvalue(this) + '",';
        }
    });


    if (extralist.length > 1) {
        extralist = extralist.slice(0, -1) + "}";
    }
    else {
        extralist = "{}";
    }
    return extralist;
}
function realtimeval(type, vaule) {
    validatedPhone = true;
    validatedEmail = true;
    if (type == 'email') {
        if ($('#email').val() == '') {
            $('#email').removeClass("alert-success");
            $('#email').addClass("alert-error");
            $('#email').parent().find('.field-error__validation-message').fadeIn();
            $('#email').parent().find('.field-error__validation-message').html('Please Enter Your Email');
            return false;
        } else {
            $('#email').addClass("alert-success");
            $('#email').removeClass("alert-error");
            $('#email').parent().find('.field-error__validation-message').hide();
            if (checkbadwords('#email')) {

            } else {
                return false;
            }
        }
    }
    var items = [];
}

function valid_postcode(postcode) {
    postcode = postcode.replace(/\s/g, "");
    var regex = /[0-9]/i;
    return regex.test(postcode);
}
function checkPostdoe() {
    if (valid_postcode($('#postcode').val()) == true) {
        flag = true;
        ValidatedPostcode = true;
        $('#postcode').addClass("alert-success");
        $('#postcode').removeClass("alert-error");
        $('#postcode').parent().find('.field-error__validation-message').hide();
    } else {
        ValidatedPostcode = false;
        flag = false;
        $('#postcode').removeClass("alert-success");
        $('#postcode').addClass("alert-error");
        $('#postcode').parent().find('.field-error__validation-message').fadeIn();
        $('#postcode').parent().find('.field-error__validation-message').html('Please Enter Correct' +
            ' Postcode');
    }
}

function valid_phone(phone) {
    var regex = /(?:[\d]{7,8}|[\d]{3,4}[\s-][\d]{3,4})/;
    return regex.test(phone);
}

function checkPhone() {
    if (valid_phone($('#phone').val()) == true) {
        flag = true;
        ValidatedPostcode = true;
        $('#phone').addClass("alert-success");
        $('#phone').removeClass("alert-error");
        $('#phone').parent().find('.field-error__validation-message').hide();
    } else {
        ValidatedPostcode = false;
        flag = false;
        $('#phone').removeClass("alert-success");
        $('#phone').addClass("alert-error");
        $('#phone').parent().find('.field-error__validation-message').fadeIn();
        $('#phone').parent().find('.field-error__validation-message').html('Please Enter Correct' +
            ' Phone Number');
    }
}

function getvalidationsettings(id) {
    return $(id).attr('lpval');

}
function getvalue(id) {

    if ($(id).is(':checkbox')) {
        if ($(id).is(':checked')) {
            return 'checked';
        } else {
            return '';
        }
    } else if ($(id).is(':radio')) {
        return $(id).val();
    }
    else {
        return $(id).val();
    }
}
function getdata() {
    var userdata = {};
    var valsettings = {};

    if (title_inputid != '') {
        titlemx = getvalue(title_inputid);
        userdata['title'] = titlemx;
        valsettings['title'] = getvalidationsettings(title_inputid);

        if (titlemx == 'Mr' || titlemx == 'Mx') {
            gendermx = 'Male';
        }
        else {
            gendermx = 'Female';
        }
        userdata['gender'] = gendermx;
    }
    if (firstname_inputid != '') {
        userdata['name'] = getvalue(firstname_inputid);
        valsettings['name'] = getvalidationsettings(firstname_inputid);
    }
    if (surname_inputid != '') {
        userdata['surname'] = getvalue(surname_inputid);
        valsettings['surname'] = getvalidationsettings(surname_inputid);
    }
    if (phone_inputid != '') {
        userdata['telephone'] = getvalue(phone_inputid);
        valsettings['telephone'] = getvalidationsettings(phone_inputid);
    }
    if (email_inputid != '') {
        userdata['email'] = getvalue(email_inputid);
        valsettings['email'] = getvalidationsettings(email_inputid);
    }
    if (postcode_inputid != '') {
        userdata['postcode'] = getvalue(postcode_inputid);
        valsettings['postcode'] = getvalidationsettings(postcode_inputid);
    }
    if (termsandcons_inputid != '') {
        userdata['terms'] = getvalue(termsandcons_inputid);
        valsettings['terms'] = getvalidationsettings(termsandcons_inputid);
    }

    if (dobday_inputid != '' && dobmonth_inputid != "" && dobyear_inputid != "") {
        day = getvalue(dobday_inputid);
        month = getvalue(dobmonth_inputid);
        year = getvalue(dobyear_inputid);
        if (day != '' & month != '' & year != '') {
            userdata['dob'] = day + '-' + month + '-' + year;
        } else {
            userdata['dob'] = '';
        }

        valsettings['dob'] = getvalidationsettings(dobday_inputid);
    }

    if ($('#addressmx').length)         // use this if you are using id to check
    {
        userdata['address'] = getvalue('#addressmx');
        valsettings['address'] = getvalidationsettings('#addressmx');
    }

    if ($('#townselector').length)         // use this if you are using id to check
    {
        userdata['town'] = getvalue('#townselector');
        valsettings['town'] = getvalidationsettings('#townselector');
    }
    if ($('#countyselector').length)         // use this if you are using id to check
    {
        userdata['county'] = getvalue('#countyselector');
        valsettings['county'] = getvalidationsettings('#countyselector');
    }
    if ($('#countryselector').length)         // use this if you are using id to check
    {
        userdata['country'] = getvalue('#countryselector');
        valsettings['country'] = getvalidationsettings('#countryselector');
    }


    var returndata = {"values": userdata, "validation": valsettings};
    return returndata;
}
function generatesenddata(id) {
    var empty = '';

    var extralist = "{}";
    var validatefield = "{}";
    var userinfo = getdata();
    var extrafields = getextrafieds();
    var validatefield = "{";

    var leadvalues = '{"offer_id":"' + offernumber + '","ip":"' + userip + '","clientid":"' + clientid + '","partnerid":"' + partnerid + '","lp_id":"' + lp_id + '","projectid":"' + projectid + '","source":"' + source + '","mobile":"",';

    $.each(userinfo['values'], function (key, value) {
        leadvalues = leadvalues + '"' + key + '":' + '"' + value + '",';
    });

    $.each(userinfo['validation'], function (key, value) {
        validatefield = validatefield + '"' + key + '":' + '"' + value + '",';
    });
    validatefield += '"ip":"required"}';
    leadvalues += '"extrafields":' + extrafields + ',"settings":{"pingtree":"' + pingtree + '","realtime":"' + realtimeclientsubmition + '"},"custvalidate":' + validatefield + '}';

    lead = JSON.parse(leadvalues);
    datadd = JSON.stringify(lead);
    return datadd;
}
function showLoader() {
    $('#singlebutton').find('span').hide();
    $('#singlebutton').find('#loader').show();
    var imgHeight = 30;
    var numImgs = 19;
    var cont = 0;

    var animation = setInterval(function () {
        var position = -1 * (cont * imgHeight);
        $('#loader').find('img').css('margin-top', position);

        cont++;
        if (cont == numImgs) {
            cont = 0;
        }
    }, 30);
}
function hideLoader() {
    $('#singlebutton').find('span').show();
    $('#singlebutton').find('#loader').hide();
}
function sendlead(id) {
    showLoader();
    datadd = generatesenddata(id);
    $.ajax({
        url: '../../v1/leads',
        data: datadd,
        dataType: 'json',
        contentType: "application/json",
        type: 'POST',
        success: function (data) {
            hideLoader();
            if (data.error == false) {
                //$("#pixelplacment").html(data.pixel);
                var form = $("<form/>",
                    {
                        method: 'post',
                        action: "../../signup/offers/" + projectid,
                        id: 'sendtoboard'
                    });

                form.append(
                    $("<input/>",
                        {
                            type: 'hidden',
                            name: 'data',
                            value: datadd,
                            style: 'width:65%'
                        }
                    )
                );
                form.append(
                    $("<input/>",
                        {
                            type: 'hidden',
                            name: 'pixel',
                            value: data.pixel,
                            style: 'width:65%'
                        }
                    )
                );
                form.append(
                    $("<input/>",
                        {
                            type: 'hidden',
                            name: 'pixel_t',
                            value: data.pixel_t,
                            style: 'width:65%'
                        }
                    )
                );
                form.append(
                    $("<input/>",
                        {
                            type: 'hidden',
                            name: 'unique',
                            value: data.unique,
                            style: 'width:65%'
                        }
                    )
                );
                form.append(
                    $("<input/>",
                        {
                            type: 'hidden',
                            name: 'coreg',
                            value: '65d5610683c536c25e5c1554ef476116',
                            style: 'width:65%'
                        }
                    )
                );
                form.append(
                    $("<input/>",
                        {
                            type: 'hidden',
                            name: 'product',
                            value: '',
                            style: 'width:65%'
                        }
                    )
                );
                form.append(
                    $("<input/>",
                        {
                            type: 'hidden',
                            name: 'form_id',
                            value: lp_id,
                            style: 'width:65%'
                        }
                    )
                );

                jQuery('#coregsub').html(form);


                jQuery('#sendtoboard').submit();

            } else {

                var errors = data.message;
                displayFieldErrors(errors);

                // alert(data.filter('div#Name'));
            }
        },
        error: function (data) {
            var errors = {"Connection": "Fail To connect"};
            displayErrors(errors);
        },
    });

    return false;
}
// Take Over submition Action
var frm = $("" + formid);
frm.submit(function (ev) {
    realtimeval("email", $('#email').val());
    checkPostdoe();
    checkPhone();
    if ($('#townselector').val() === '' && $('#postcode').val() != '') {
        $('.pre_info').fadeIn();
    }
    if ($('#townselector').val() === '') {
        $('#searchpostcode').css('cssText', 'color:red; border: 2px solid red; position: relative;top: -2px;  font-size: 13px;');

    } else {
        $('#searchpostcode').css('cssText', 'color:black; border: 0;position: static;top: 0px;  font-size: 14px;');
        $('.pre_info').hide();
    }
    if (ValidatedPostcode == true) {
        flag = true;
        if (validatedEmail == true && validatedPhone == true) {
            if ($('#sendlead input').hasClass('alert-error')) {

            }

        } else if (validatedEmail != true) {
            $('#email').removeClass("alert-success");
            $('#email').addClass("alert-error");
            flag = false;

        } else if (validatedPhone != true) {
            $('#phone').removeClass("alert-success");
            $('#phone').addClass("alert-error");
            flag = false;
        }
    } else if ($('#postcode').val() == '') {
        addError('#postcode');
        $('#postcode').parent().find('.field-error__validation-message').fadeIn();
        flag = false;
    }
    ev.preventDefault();
    //获取RUL参数值
    function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    }

    if (flag) {

        var loacation = window.location.href;
        var transaction_id = "";
        if (/transaction_id/.test(loacation)) {
            transaction_id = getUrlParam("transaction_id");
        }
        var affId = getUrlParam("aff_id");
        var advSub = getUrlParam("adv_sub");

        $.get("http://global.ymtracking.com/conv",
        {"transaction_id":transaction_id,"adv_sub":advSub},
        function(result){
          console.log(result);
        });

        // jQuery.ajax({
        //     dataType: 'json',
        //     type: "GET",
        //     async: false,
        //     url: "http://global.ymtracking.com/conv",
        //     data: "transaction_id=" + transaction_id+"&adv_sub="+advSub,
        //     success: function (response) {
        //         if (response) {
        //             console.log(response);
        //         }
        //     }
        // });

        var firstname = $("#firstname").val();
        var lastname = $("#lastname").val();
        var usertitle = $("#usertitle").val();
        var email = $("#email").val();
        var dob = $("#dobmonth").val() + "/" + $("#dobday").val() + "/" + $("#dobyear").val();
        var telphone = $("#phone").val();
        var postcode = $("#postcode").val();
        var thirdSrc = "<script type='text/javascript' src='http://ldsapi.tmginteractive.com/generateplacementscript.aspx?placement=32827900&publisher=956866&affid=" + affId + "&subid="+transaction_id+"&tmg_firstname=" + firstname + "&tmg_lastname=" + lastname + "&tmg_email=" + email + "&tmg_address=&tmg_zip=" + postcode + "&tmg_dob=" + dob + "&tmg_phone=" + telphone + "&tmg_gender=" + usertitle +"&redirect=" + "' ></script>";

        var strVar="";
        strVar += "<div id='loading' style='text-align: center;'>";
        strVar += "<img src='images\/hourglass.svg'>";
        strVar += "<\/div>";
        strVar += "<script>";
        strVar += "document.addEventListener(\"DOMContentLoaded\", function(event) { ";
        strVar += "  document.getElementById(\"loading\").style.display=\"none\"";
        strVar += "});";
        strVar += "<\/script>";

        strVar += "<div id=\"thirdscript-div\" style='padding:5%'>" + thirdSrc;
        strVar += "<\/div>";
        strVar += "<button type=\"button\" class=\"form__button bold\" id=\"thirdstage-button\" style=\"    color: #fff;";
        strVar += "    border: none;";
        strVar += "    border-radius: 10px;";
        strVar += "    padding: 15px;";
        strVar += "    outline: 0;";
        strVar += "    margin: 0 auto 10px;";
        strVar += "    width: 100%;";
        strVar += "    display: block;";
        strVar += "    font-weight: 700;";
        strVar += "    font-size: 25px;";
        strVar += "    background-color: #73C23F!important;\" onclick=\"return TMG_CheckForClick();\">";
        strVar += "    <span>Enter Now <span class=\"icon--right-arrow\"><\/span><\/span>";
        strVar += "<\/button>";
        strVar += "";


        srcDoc.set(document.getElementById("articleIframe"),strVar );

        $('#secondstage').hide();
        $('#thirdstage').show();
        $(".content__form-step1").after($(".win__wrapper").addClass("win__wrapper--custom"));
        $('#tmgCallPixelSrc').css("width", "1px");
        $('#tmgCallPixelSrc').css("height", "1px");
    }
    return false;
});
$("#phone").on("focusout", function () {
    realtimeval("phone", $(this).val());
});
$("#email").on("change", function () {
    realtimeval("email", $(this).val());
});
$("#postcode").on("change", function () {
    if (ValidatedPostcode == true && $('#postcode').val() > 4) {

    } else if ($('#postcode').val() == '') {
        addError('#postcode');
        $('#postcode').parent().find('.field-error__validation-message').fadeIn();
    } else {
        addError('#postcode');
        $('#postcode').parent().find('.field-error__validation-message').fadeIn();
        $('#postcode').parent().find('.field-error__validation-message').html('Invalid Postcode');
        $('.input-with-icon .field-error__validation-message').css('color', '#e30000');
        $('.input-with-icon .field-error__validation-message').css('margin-top', '0');
        $('.input-with-icon .field-error__validation-message').css('padding', '0');
        $('.input-with-icon .field-error__validation-message').css('border', '0');
    }
});

function addError(c) {
    $(c).addClass("alert-error");
    $(c).removeClass("alert-success");
}
function addSuccess(c) {
    $(c).addClass("alert-success");
    $(c).removeClass("alert-error");
}
function showError(c) {
    $(c).parent().find('.field-error__validation-message').fadeIn();
}
function hideError(c) {
    $(c).parent().find('.field-error__validation-message').fadeOut();

}

function CheckFormValid(c, type, a, b, am, bm) {
    if (type === 'input') {
        if ($(c).val().length < a && $(c).val().length >= b && $(c).val() != '') {
            addSuccess(c);
            $(c).parent().find('.field-error__validation-message').fadeOut();
            flag = true;
        } else if ($(c).val().length >= a) {
            $(c).parent().find('.field-error__validation-message').html(am);
            $(c).parent().find('.field-error__validation-message').fadeIn();
            addError(c);
            flag = false;
        } else if ($(c).val().length < b) {
            $(c).parent().find('.field-error__validation-message').html(bm);
            $(c).parent().find('.field-error__validation-message').fadeIn();
            addError(c);
            flag = false;
        } else {
            $(c).parent().find('.field-error__validation-message').fadeIn();
            addError(c);
            flag = false;
        }
    }
    if (type === 'select') {

        if ($(c).val() != '') {
            addSuccess(c);
            flag = true;
            $(c).parent().find('.field-error__validation-message').fadeOut();
        } else {
            $(c).parent().find('.field-error__validation-message').fadeIn();
            addError(c);
            flag = false;
        }
    }
}
$(document).ready(function () {

    $('#singlebutton').on('click', function () {
        CheckFirstName();
        CheckLastName();
        //CheckFormValid('#phone', 'input', 12, 11, 'The Telephone field needs to be 11 characters', 'The Telephone field needs to be 11 numbers');
        CheckFormValid('#postcode', 'select', 6);
        CheckFormValid('#usertitle', 'select');
        //CheckFormValid('#email', 'select', 200, 3, 'Please enter your email');
        CheckFormValid('#dobday', 'select');
        CheckFormValid('#dobmonth', 'select');
        CheckFormValid('#dobyear', 'select');

    });
    $('#usertitle').change(function () {
        if ($(this).val() != '') {
            addSuccess(this);
            flag = true;
            $(this).parent().find('.field-error__validation-message').fadeOut();
        } else {
            addError(this);
            flag = false;
        }
    });
    function CheckFirstName() {

        var value = $('#firstname').val();
        if (value.length < 200 && value.length > 2&& $('#firstname').val() != '' &&checkbadwords('#firstname') != false && /^[a-zA-Z]+$/.test(value)) {
            addSuccess('#firstname');
            flag = true;
            $('#firstname').parent().find('.field-error__validation-message').fadeOut();
        }else if (value.length == '') {
            $('#firstname').parent().find('.field-error__validation-message').html('Please Enter Your First Name');
            $('#firstname').parent().find('.field-error__validation-message').fadeIn();
            addError('#firstname');
            flag = false;
        } else {
          $('#firstname').parent().find('.field-error__validation-message').html('Invalid Entry Please Check');
          $('#firstname').parent().find('.field-error__validation-message').fadeIn();
          addError('#firstname');
          flag = false;
        }
    }

    function CheckLastName() {
        var value = $('#lastname').val();
        if (value.length < 200 && value.length > 2 && $('#lastname').val() != '' && checkbadwords('#lastname') != false && /^[a-zA-Z]+$/.test(value)) {
            addSuccess('#lastname');
            $('#lastname').parent().find('.field-error__validation-message').fadeOut();
            flag = true;
        } else if (value.length == '') {
            $('#lastname').parent().find('.field-error__validation-message').html('Please Enter Your Last Name');
            $('#lastname').parent().find('.field-error__validation-message').fadeIn();
            addError('#lastname');
            flag = false;
        } else {
          $('#lastname').parent().find('.field-error__validation-message').html('Invalid Entry Please Check');
          $('#lastname').parent().find('.field-error__validation-message').fadeIn();
          addError('#lastname');
          flag = false;
        }
    }

    $('#firstname').change(function () {
        CheckFirstName();
    });
    $('#lastname').change(function () {
        CheckLastName();
    });
    $('#dobday').change(function () {
        if ($(this).val() != '') {
            addSuccess(this);
            flag = true;
            $(this).parent().find('.field-error__validation-message').fadeOut();
        } else {
            addError(this);
            flag = false;
        }
    });
    $('#dobmonth').change(function () {
        if ($(this).val() != '') {
            addSuccess(this);
            flag = true;
            $(this).parent().find('.field-error__validation-message').fadeOut();
        } else {
            addError(this);
            flag = false;
        }
    });
    $('#dobyear').change(function () {
        if ($(this).val() != '') {
            addSuccess(this);
            flag = true;
            $(this).parent().find('.field-error__validation-message').fadeOut();
        } else {
            addError(this);
            flag = false;
        }
    });
    $('#postcode').change(function () {
        if ($(this).val() != '' && $(this).val().length > 4 && $(this).val().length < 12) {
            addSuccess(this);
            flag = true;
            $(this).parent().find('.field-error__validation-message').css('cssText', 'display:none !important;');
        } else {
            addError(this);
            flag = false;
        }
    });
});
