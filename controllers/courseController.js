import courseData from '../indexed.json' assert { type: 'json' };

export const getCourse = async (req, res) => {
    const  code  = req.params.course;
    if (!courseData[code] || !code) {
      return res.status(404).json({ msg: `no course with code ${code}` });
    }
    res.status(200).json(courseData[code]);
};