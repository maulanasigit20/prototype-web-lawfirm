import { Lock, Mail, ArrowRight } from "lucide-react";
import Background from "../imports/heroBackground.png";
import logo from "../imports/logo.png";

type Props = {
  onLogin: () => void;
};

export default function PortalLogin({ onLogin }: Props) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Dummy login
    onLogin();
  };

  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background Image */}
      <img
        src={Background}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#060d1f]/50"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-6">

        <div className="w-full max-w-md">

          {/* Login Card */}
          <div className="bg-[#0d1730]/80 backdrop-blur-xl border border-[#c9a227]/20 rounded-2xl p-10 shadow-2xl">

            {/* Logo */}
            <div className="flex justify-center mb-6">
                <img
                src={logo}
                className="w-15"
                alt="Logo"
                />
            </div>

            <p className="text-[#c9a227] tracking-[0.35em] text-xs uppercase text-center">
              Client Portal
            </p>

            <h1
              className="text-white text-3xl font-bold text-center mt-3"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Selamat Datang
            </h1>

            <p className="text-center text-[#dce6f5]/60 mt-3 text-sm leading-relaxed">
              Masuk untuk melihat perkembangan perkara,
              dokumen hukum dan jadwal konsultasi Anda.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >

              {/* Email */}

              <div>

                <label className="text-[#dce6f5]/70 text-xs uppercase tracking-wider">
                  Email
                </label>

                <div className="mt-2 flex items-center border border-white/10 rounded-lg px-4 bg-white/5">

                  <Mail className="w-4 h-4 text-[#c9a227]" />

                  <input
                    type="email"
                    defaultValue="client@ppal.com"
                    className="w-full bg-transparent px-3 py-4 text-white outline-none"
                  />

                </div>

              </div>

              {/* Password */}

              <div>

                <label className="text-[#dce6f5]/70 text-xs uppercase tracking-wider">
                  Password
                </label>

                <div className="mt-2 flex items-center border border-white/10 rounded-lg px-4 bg-white/5">

                  <Lock className="w-4 h-4 text-[#c9a227]" />

                  <input
                    type="password"
                    defaultValue="123456"
                    className="w-full bg-transparent px-3 py-4 text-white outline-none"
                  />

                </div>

              </div>

              <button
                className="w-full mt-2 bg-[#c9a227] hover:bg-[#ddb33a] text-[#060d1f] py-4 rounded-lg font-bold flex justify-center items-center gap-3 transition"
              >
                Masuk ke Portal

                <ArrowRight size={18} />
              </button>

            </form>

            <div className="mt-8 text-center">

              <p className="text-[#dce6f5]/50 text-xs">
                Belum memiliki akun?
              </p>

              <button
                className="mt-2 text-[#c9a227] text-sm hover:underline"
              >
                Hubungi Administrator
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}