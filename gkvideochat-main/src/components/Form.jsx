export const Form = ({ roomCode, setRoomCode, handleSubmit }) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="text-white md:pt-10 mt-5 flex flex-col items-center justify-center"
    >
      <label
        htmlFor="enter-room"
        className="text-[30px] md:text-[40px] font-bold py-3"
      >
        JOIN THE THERAPY
      </label>
      <input
        id="enter-room"
        type="text"
        required
        placeholder="Enter room code"
        value={roomCode}
        onChange={(e) => setRoomCode(e.target.value)}
        className="bg-white py-1.5 md:py-2 px-4 rounded-full max-w-[14rem] my-4 text-black md:mt-6 outline-0 placeholder:text-gray-600"
      />
      <button
        className="bg-[#2D72FF] text-white px-4 lg:px-8 py-2 lg:py-4 rounded-full hover:bg-[#2f6fed] transition ease-in-out duration-200 disabled:text-gray-400 disabled:bg-gray-600"
        disabled={!roomCode}
      >
        ENTER THERAPY
      </button>
    </form>
  );
};
