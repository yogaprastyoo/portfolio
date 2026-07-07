insert into projects (slug, title, summary, body_md, tech, featured, sort_order, published) values
('cashier', 'Cashier', 'A POS website for the school coffee shop.', E'## Overview\nA point-of-sale system built for the school coffee shop: product catalog, cart, checkout, and daily sales recap.\n', '{Laravel,Livewire,MySQL}', true, 1, true),
('citizen-care', 'Citizen Care', 'A citizen-report management app.', E'## Overview\nCitizen Care lets residents submit reports and lets admins triage them. Built to practice Laravel + Livewire patterns.\n', '{Laravel,Livewire,MySQL}', true, 2, true),
('anime-list', 'Anime List', 'An anime catalog built to learn Next.js.', E'## Overview\nBrowsable anime catalog with search and detail pages, consuming a public API.\n', '{Next.js,DaisyUI,TypeScript}', true, 3, true),
('attendance', 'Attendance', 'An attendance system for a student exchange with Vietnam.', E'## Overview\nAttendance tracking with an admin panel built on Filament, used during a student-exchange program with Vietnam.\n', '{Laravel,Filament,MySQL}', true, 4, true);

insert into skills (name, category, is_learning, sort_order) values
('Laravel','backend',false,1),('REST API','backend',false,2),('PHP','backend',false,3),('Node.js','backend',false,4),
('React.js','frontend',false,1),('Next.js','frontend',false,2),('JavaScript','frontend',false,3),('TypeScript','frontend',false,4),
('ThingsBoard','iot-robotics',false,1),('MQTT','iot-robotics',false,2),('IoT','iot-robotics',false,3),('ROS','iot-robotics',false,4),('C','iot-robotics',false,5),('C++','iot-robotics',false,6),('C#','iot-robotics',false,7),
('DevOps','devops',false,1),('Docker','devops',false,2),('Linux','devops',false,3),('Git','devops',false,4),
('MySQL','database',false,1),('PostgreSQL','database',false,2),
('Kubernetes','devops',true,10),('Terraform','devops',true,11),('AWS','devops',true,12),('Ansible','devops',true,13),('Prometheus','devops',true,14),('Grafana','devops',true,15),
('Azure IoT','iot-robotics',true,10),('ROS2','iot-robotics',true,11),('Edge Computing','iot-robotics',true,12),
('Go','backend',true,10),('Rust','backend',true,11);
