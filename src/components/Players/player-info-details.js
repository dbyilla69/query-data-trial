export default function PlayerDetailsInfo({ playerInfo }) {
  console.log('details stats', playerInfo);
  return (
    <>
      <div>Weight:{playerInfo.weight}</div>
      <div>Height:{playerInfo.height}</div>
      <div>Date of Birth: {playerInfo.birthDate}</div>
      <div>Age: {playerInfo.age}</div>
      <div>Hometown: {playerInfo.birthCity}</div>
      <div>High School: {playerInfo.highSchool}</div>
      <div>College: {playerInfo.college}</div>
    </>
  );
}
