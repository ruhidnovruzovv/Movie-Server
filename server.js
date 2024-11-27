const express = require('express');
const app = express();

// Məlumat nümunəsi
const data = [
  { id: 'top1', name: 'Məlumat 1', description: 'Bu top1 məlumatıdır' },
  { id: 'top2', name: 'Məlumat 2', description: 'Bu top2 məlumatıdır' },
  { id: 'top3', name: 'Məlumat 3', description: 'Bu top3 məlumatıdır' },
];

// Bütün məlumatlar üçün endpoint
app.get('/data', (req, res) => {
  res.status(200).json(data);
});

// ID ilə məlumat üçün endpoint
app.get('/data/:id', (req, res) => {
  const id = req.params.id;
  const result = data.find(item => item.id === id);

  if (result) {
    res.status(200).json(result);
  } else {
    res.status(404).json({ message: 'Məlumat tapılmadı' });
  }
});

// Dinamik port istifadə edin
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server ${port} portunda işləyir`);
});
